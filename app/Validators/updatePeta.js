'use strict'

class updatePeta {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      nm_item: 'required',
      geojson: 'required',
      kategori_item: 'required'
    }
  }
}

module.exports = updatePeta
