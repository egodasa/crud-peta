'use strict'
class LoginController {
  showLogin({view}){
    return view.render('pages.login');
  }
  async checkLogin({request, response, auth, session}){
    const { username, password } = request.post();
    try{
      await auth.attempt(username, password)
      response.redirect('/');
    }catch(e){
      session.flash({message: 'Username atau password salah!'});
      response.redirect('/login');
    }
  }
}

module.exports = LoginController
