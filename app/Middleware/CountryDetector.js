'use strict'

class CountryDetector {
  async handle ({ request}, next) {
    console.log(request)
    console.log('Pengecekan sebelum akses');
    await next()
    console.log('pengecekan sesudah akses');
  }
}

module.exports = CountryDetector
