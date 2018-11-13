'use strict'

const Peta = use('App/Models/Peta')
const Foto = use('App/Models/Gambar')
const Database = use('Database')
const Db = use('Database')
const Helpers = use('Helpers')

class PetaController {
  async index({view, request, response, params, session}){
    let detail = {}
    const TipeItem = await Db.select().from('tbl_tipe_item');
    const KategoriItem = await Db.select().from('tbl_kategori_item');
    if(request.ajax()){
      const peta = await Db.select().from('daftar_item');
      return response.json(peta);
    }else{
      if(params){
        detail = await Db.select().from('daftar_item').where(Peta.primaryKey, params.id).first();
      }
      return view.render('pages.peta', {detail: detail, tipe_item: TipeItem, kategori_item: KategoriItem});
    }
  }
  async store({request, view, response, session}){
    const req = request.post();
    const fileFoto = request.file('foto');
    const peta = {
      nm_item: req.nm_item,
      geojson: req.geojson,
      id_titem: req.tipe_item,
      id_kitem: req.kategori_item
    }
    const trx = await Database.beginTransaction()
    
    // Foto tidak wajib ada
    if(fileFoto){
      await fileFoto.move(Helpers.tmpPath('uploads'), {
        name: `${new Date().getTime()}.jpg`,
        overwrite: true
      })
      const foto = new Foto();
      foto.id_item = await trx.insert(peta).into('tbl_item_peta').returning('id_item');
      foto.id_item = parseInt(foto.id_item);
      foto.nm_gambar = fileFoto.fileName;
      await foto.save(trx);
    }else{
      await trx.insert(peta).into('tbl_item_peta').returning('id_item');
    }
    trx.commit();
    response.redirect('/');
  }
  async update({request, response, params, session}){
    const req = request.post();
    await Peta.query()
      .where(Peta.primaryKey, params.id)
      .update({
        nm_item: req.nm_item,
        id_kitem: req.kategori_item,
        geojson: req.geojson
      });
    response.redirect('/');
  }
  async remove({params, response}){
    await Peta.query()
      .where(Peta.primaryKey, params.id)
      .delete();
    response.redirect('/');
  }
  async petaByKategori({params, response, request}){
    if(request.ajax()){
      const petaByKategori = await Db.select().from('daftar_item').where({id_kitem: params.id});
      return response.json(petaByKategori);
    }
  }
}

module.exports = PetaController
