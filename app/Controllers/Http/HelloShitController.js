'use strict'

const db = use('Database')
class HelloShitController {
  Index({session, view}){
    const res_data = session.all() || {};
    console.log(session.all());
    return view.render('hello', res_data);
  }
  DoLogin({request, response, session}){
    const req = request.post();
    session.put('username', req.username);
    session.put('email', req.email);
    response.redirect('/');
  }
  DoLogout({session, response}){
    const state = session.all() ||  {};
    if(state){
      session.forget('username');
      session.forget('email');
    }
    response.redirect('/');
  }
}

module.exports = HelloShitController
