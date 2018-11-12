'use strict'

class storePengguna {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      username: 'required|min:3|max:20|unique:tbl_user,username',
      email: 'required|min:5|max:50|unique:tbl_user,email',
      password: 'required|min:3|max:20'
    }
  }
}

module.exports = storePengguna
