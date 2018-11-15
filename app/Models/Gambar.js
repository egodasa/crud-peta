'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Gambar extends Model {
  static get table(){
    return 'tbl_gambar_item'
  }
  static get primaryKey () {
    return 'id_gambar'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
  itemPeta(){
    this.belongsTo('App/Models/Peta', this.primaryKey, 'id_item');
  }
}

module.exports = Gambar
