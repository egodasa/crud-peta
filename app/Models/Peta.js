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
}

module.exports = Peta
