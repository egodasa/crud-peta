'use strict'
const Pengguna = use('App/Models/Pengguna')
const Datatable = use('App/Controllers/Http/Datatable')
const Column = use('App/Controllers/Http/Column')
const Hash = use('Hash')

class PenggunaController {
  async index({view, request, response, params, session}){
    let detail = {}
    let req = request.get();
    req.page = req.page || 1;
    req.limit = req.limit || 10;
    if(params){
      detail = await Pengguna.find(params.id);
    }
    const data = await Pengguna.query().paginate(req.page, req.limit);

    // Table Generator dengan paginasi.
    let dt = new Datatable();
    dt.setRequest(req);
    dt.setUrl("pengguna");
    dt.setPageUrl("page");
    dt.setPrimaryKey(Pengguna.primaryKey);
    dt.setColumn([
      new Column('id_user'),
      new Column('username','Username'),
      new Column('email','Email'),
      new Column('_aksi', 'Aksi', function(data){
        return `
          <form method="POST" action="pengguna/${data.id_user}?_method=DELETE">
            <input type="hidden" name="_csrf" value="${request.csrfToken}" />
            <a href="pengguna/${data.id_user}" class="w3-btn w3-teal w3-small">Edit</a>
            <button type="submit" class="w3-btn w3-red w3-small">Hapus</button>
          </form>  
        `})
    ]);
    dt.setPagination(data.toJSON());
    
    // Table Generator dengan paginasi.
    return view.render('pages.pengguna', {datatable:dt, detail: detail});
  }
  async store({request, view, response, session}){
    const req = request.post();
    const pengguna = new Pengguna();
    pengguna.username = req.username;
    pengguna.email = req.email;
    pengguna.password = await Hash.make(req.password);
    await pengguna.save();
    return response.redirect('/pengguna');
  }
  
  async update({request, response, params, session}){
    const req = request.post();
    await Pengguna.query()
      .where(Pengguna.primaryKey, params.id)
      .update({
        email: req.email,
        password: await Hash.make(req.password)
      });
    response.redirect('/pengguna');
  }
  async remove({params, response}){
    await Pengguna.query()
      .where(Pengguna.primaryKey, params.id)
      .delete();
    response.redirect('/pengguna');
  }
}

module.exports = PenggunaController
