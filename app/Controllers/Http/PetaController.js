'use strict'

const Peta = use('App/Models/Peta')

class PetaController {
  async index({view, request, response, params}){
    let detail = {}
    if(request.ajax()){
      const peta = await Peta.all();
      return response.json(peta.toJSON());
    }else{
      if(params){
        detail = await Peta.find(params.id);
      }
      return view.render('pages.peta', {detail: detail});
    }
  }
  async store({request, view, response}){
    const req = request.post();
    
    const peta = new Peta();
    peta.nm_item = req.nm_item;
    peta.koordinat = req.koordinat;
    peta.tipe_item = req.tipe_item;
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
