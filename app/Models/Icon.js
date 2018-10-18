'use strict'

const Model = use('Model')

class Icon extends Model {
  static get table(){
    return 'tbl_icon'
  }
  static get primaryKey () {
    return 'id_icon'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
}

module.exports = Icon
