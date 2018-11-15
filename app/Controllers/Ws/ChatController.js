'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
  onMessage(message){
    // Broadcast ke semua pengguna termasuk diri sendiri
    //~ this.socket.broadcastToAll('message', message)
    
    // sebaliknya
    this.socket.broadcast('message', message)
  }
}

module.exports = ChatController
