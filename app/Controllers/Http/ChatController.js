'use strict'

class ChatController {
  index({view}){
    return view.render('pages.chat');
  }
}

module.exports = ChatController
