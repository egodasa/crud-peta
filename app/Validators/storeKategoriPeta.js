'use strict'

class storeKategoriPeta {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_kitem: 'required',
      detail: 'required'
    }
  }
}

module.exports = storeKategoriPeta
