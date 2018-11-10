'use strict'

const Peta = use('App/Models/Peta')
const Db = use('Database')
const { validate } = use('Validator')
const rules = {
  nm_item: 'required',
  geojson: 'required',
  tipe_item: 'required',
  kategori_item: 'required'
}


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
    const validation = await validate(req, rules);
    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll();
    }
    else{
      const peta = new Peta();
      peta.nm_item = req.nm_item;
      peta.geojson = req.geojson;
      peta.id_titem = req.tipe_item;
      peta.id_kitem = req.kategori_item;
      await peta.save();
    }
    response.redirect('/');
  }
  async update({request, response, params, session}){
    const req = request.post();
    
    delete rules.tipe_item;
    const validation = await validate(req, rules);
    if(validation.fails()){
      session.withErrors(validation.messages()).flashAll();
      response.redirect(`/peta/${params.id}`);
    }
    else{
      await Peta.query()
        .where(Peta.primaryKey, params.id)
        .update({
          nm_item: req.nm_item,
          id_kitem: req.kategori_item,
          geojson: req.geojson
        });
      response.redirect('/');
    }
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
