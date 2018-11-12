'use strict'

class storePeta {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_item: 'required',
      geojson: 'required',
      tipe_item: 'required',
      kategori_item: 'required',
      foto: 'file|file_ext:jpg|file_size:2mb'
    }
  }
}

module.exports = storePeta
