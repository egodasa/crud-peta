'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pengguna extends Model {
  static get table(){
    return 'tbl_user'
  }
  static get primaryKey () {
    return 'id_user'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
}

module.exports = Pengguna
