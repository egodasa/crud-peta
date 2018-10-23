'use strict'

const KategoriItem = use('App/Models/KategoriItem')
let Datatable = use('App/Controllers/Http/Datatable')
let Column = use('App/Controllers/Http/Column')

class KategoriItemController {
  async index({view, request, response, params}){
    let detail = {}
    let req = request.get();
    req.page = req.page || 1;
    req.limit = req.limit || 10;
    if(params){
      detail = await KategoriItem.find(params.id);
    }
    const data = await KategoriItem.query().paginate(req.page, req.limit);

    // Table Generator dengan paginasi.
    let dt = new Datatable();
    dt.setRequest(req);
    dt.setUrl("kategori");
    dt.setPageUrl("page");
    dt.setPrimaryKey(KategoriItem.primaryKey);
    dt.setColumn([
      new Column('id_kitem'),
      new Column('nm_kitem','Nama Kategori Peta'),
      new Column('detail','Detail Kategori'),
      new Column('_aksi', 'Aksi', function(data){
        return `
          <form method="POST" action="kategori/${data.id_kitem}?_method=DELETE">
            <input type="hidden" name="_csrf" value="${request.csrfToken}" />
            <a href="kategori/${data.id_kitem}" class="w3-btn w3-teal w3-small">Edit</a>
            <button type="submit" class="w3-btn w3-red w3-small">Hapus</button>
          </form>  
        `})
    ]);
    dt.setPagination(data.toJSON());
    
    // Table Generator dengan paginasi.
    return view.render('pages.kategori', {datatable:dt, detail: detail});
  }
  async store({request, view, response}){
    const req = request.post();
    
    const kategoriItem = new KategoriItem();
    kategoriItem.nm_kitem = req.nm_kitem;
    kategoriItem.detail = req.detail;
    await kategoriItem.save();
    response.redirect('/kategori');
  }
  async update({request, response, params}){
    const req = request.post();
    await KategoriItem.query()
      .where(KategoriItem.primaryKey, params.id)
      .update({
        nm_kitem: req.nm_kitem,
        detail: req.detail
      });
    response.redirect('/kategori');
  }
  async remove({params, response}){
    await KategoriItem.query()
      .where(KategoriItem.primaryKey, params.id)
      .delete();
    response.redirect('/kategori');
  }
}

module.exports = KategoriItemController
