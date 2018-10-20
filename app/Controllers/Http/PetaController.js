'use strict'

const Peta = use('App/Models/Peta')
const Db = use('Database')

class PetaController {
  async index({view, request, response, params}){
    let detail = {}
    const TipeItem = await Db.select().from('tbl_tipe_item');
    if(request.ajax()){
      const peta = await Db.select().from('daftar_item');
      return response.json(peta);
    }else{
      if(params){
        detail = await Peta.find(params.id);
      }
      return view.render('pages.peta', {detail: detail, tipe_item: TipeItem});
    }
  }
  async store({request, view, response}){
    const req = request.post();
    
    const peta = new Peta();
    peta.nm_item = req.nm_item;
    peta.koordinat = req.koordinat;
    peta.id_titem = req.tipe_item;
    await peta.save();
    response.redirect('/peta');
  }
  async update({request, response, params}){
    const req = request.post();
    await Peta.query()
      .where(Peta.primaryKey, params.id)
      .update({
        nm_item: req.nm_icon,
        koordinat: req.koordinat
      });
    response.redirect('/');
  }
  async remove({params, response}){
    await Peta.query()
      .where(Peta.primaryKey, params.id)
      .delete();
    response.redirect('/');
  }
}

module.exports = PetaController
