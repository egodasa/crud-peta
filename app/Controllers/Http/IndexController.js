'use strict'

const Db = use('Database')
class IndexController {
  async index({view}){
    const KategoriItem = await Db.select().from('tbl_kategori_item');
    return view.render('pages.index', {kategori_item: KategoriItem});
  }
}

module.exports = IndexController
