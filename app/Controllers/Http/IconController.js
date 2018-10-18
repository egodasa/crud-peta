'use strict'

const Icon = use('App/Models/Icon')
let Datatable = use('App/Controllers/Http/Datatable')
let Column = use('App/Controllers/Http/Column')

class IconController {
  async index({view, params, request}){
    let detail = {};
    let req = request.get();
    req.page = req.page || 1;
    req.limit = req.limit || 10;
    if(params){
      detail = await Icon.find(params.id);
    }
    const data = await Icon.query().paginate(req.page, req.limit);
    
    // Table Generator dengan paginasi.
    let dt = new Datatable();
    dt.setRequest(req);
    dt.setUrl("icon");
    dt.setPageUrl("page");
    dt.setPrimaryKey(Icon.primaryKey);
    dt.setColumn([
      new Column('id_icon'),
      new Column('nm_icon','Nama Icon'),
      new Column('kd_icon','Kode Icon'),
      new Column('_aksi', 'Aksi', function(data){
        return `
          <form method="POST" action="icon/${data.id_icon}?_method=DELETE">
            <input type="hidden" name="_csrf" value="${request.csrfToken}" />
            <a href="icon/${data.id_icon}" class="w3-btn w3-teal w3-small">Edit</a>
            <button type="submit" class="w3-btn w3-red w3-small">Hapus</button>
          </form>  
        `})
    ]);
    dt.setPagination(data.toJSON());
    // Table Generator dengan paginasi.
    
    return view.render('pages.icon',{
      datatable: dt,
      detail: detail
    });
  }
  async store({request, view, response}){
    const icon = new Icon();
    const req = request.post();
    icon.nm_icon = req.nm_icon;
    icon.kd_icon = req.kd_icon;
    await icon.save();
    response.redirect('/icon');
  }
  async update({request, response, params}){
    const req = request.post();
    await Icon.query()
      .where(Icon.primaryKey, params.id)
      .update({
        nm_icon: req.nm_icon,
        kd_icon: req.kd_icon
      });
    response.redirect('/icon');
  }
  async remove({params, response}){
    await Icon.query()
      .where(Icon.primaryKey, params.id)
      .delete();
    response.redirect('/icon');
  }
}

module.exports = IconController
