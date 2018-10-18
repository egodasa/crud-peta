'use strict'

const Model = use('Model')

class Pengguna extends Model {
  static get table(){
    return 'tbl_pengguna'
  }
  static get primaryKey () {
    return 'id_pengguna'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
  static get hidden () {
    return ['password']
  }
  getJpengguna(){
    return this.hasOne('App/Models/Jpengguna', this.primaryKey, 'id_jpengguna');
  }
}

module.exports = Pengguna
