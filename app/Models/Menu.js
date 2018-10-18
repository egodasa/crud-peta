'use strict'

const Model = use('Model')

class Menu extends Model {
  static get table(){
    return 'tbl_menu'
  }
  static get primaryKey () {
    return 'id_menu'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
  getIcon(){
    return this.hasOne('App/Models/Icon', this.primaryKey, 'id_icon');
  }
}

module.exports = Menu
