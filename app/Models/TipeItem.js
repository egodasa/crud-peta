'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TipeItem extends Model {
  static get table(){
    return 'tbl_tipe_item'
  }
  static get primaryKey () {
    return 'id_titem'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
}

module.exports = TipeItem
