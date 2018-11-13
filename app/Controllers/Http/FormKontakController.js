'use strict'
const Mail = use('Mail')

class FormKontakController {
  index({view}){
    return view.render('pages.kontak');
  }
  async sendEmail({request, response, session}){
    try{
      await Mail.send('pages.pesan-email', request.post(), (message) => {
        message
          .to('egodasa@gmail.com')
          .from('egodasa@yahoo.com')
          .subject('Test hubungi kami')
      })
      session.flash({email_message: 'Anda sudah berhasil menghubungi kami! Terima kasih...'});
    }catch(e){
      session.flash({email_message: 'Tidak dapat mengirim pesan Anda. Silahkan coba lagi nanti!'});
      console.log(e);
    }
    console.log(session.all());
    response.redirect('/hubungi-kami');
  }
}

module.exports = FormKontakController
