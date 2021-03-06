'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class KategoriItem extends Model {
  static get table(){
    return 'tbl_kategori_item'
  }
  static get primaryKey () {
    return 'id_kitem'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
  listItemPeta(){
    this.hasMany('App/Models/Peta');
  }
}

module.exports = KategoriItem
