'use strict'

const Model = use('Model')

class Jpengguna extends Model {
  static get table(){
    return 'tbl_jenis_pengguna'
  }
  static get primaryKey () {
    return 'id_jpengguna'
  }
  static get createdAtColumn () {
    return null
  }
  static get updatedAtColumn () {
    return null
  }
}

module.exports = Jpengguna
