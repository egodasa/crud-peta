'use strict'

const Model = use('Model')

class Peta extends Model {
  static get table(){
    return 'tbl_item_peta'
  }
  static get primaryKey () {
    return 'id_item'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
  tipeItem(){
    return this.hasOne('App/Models/TipeItem', this.primaryKey, 'id_titem');
  }
  kategoriItem(){
    return this.hasOne('App/Models/TipeItem', this.primaryKey, 'id_kitem');
  }
  gambarItem(){
    return this.hasMany('App/Models/Gambar', this.primaryKey, 'id_item');
  }
}

module.exports = Peta
