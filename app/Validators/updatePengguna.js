'use strict'

class updatePengguna {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      email: 'required|min:5|max:50|unique:tbl_user,email',
      password: 'required|min:3|max:20'
    }
  }
}

module.exports = updatePengguna
