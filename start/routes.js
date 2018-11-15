'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/', 'IndexController.index')

Route.get('/pengguna/:id?', 'PenggunaController.index').middleware('user')
Route.post('/pengguna', 'PenggunaController.store').middleware('user').validator('storePengguna')
Route.put('/pengguna/:id/edit', 'PenggunaController.update').middleware('user').validator('updatePengguna')
Route.delete('/pengguna/:id', 'PenggunaController.remove').middleware('user')

Route.get('/peta/:id?', 'PetaController.index')
Route.post('/peta', 'PetaController.store').validator('storePeta')
Route.put('/peta/:id/edit', 'PetaController.update').validator('updatePeta')
Route.delete('/peta/:id', 'PetaController.remove')
Route.get('/peta/kategori/:id', 'PetaController.petaByKategori')

Route.get('/kategori/:id?', 'KategoriItemController.index')
Route.post('/kategori', 'KategoriItemController.store').validator('storeKategoriPeta')
Route.put('/kategori/:id/edit', 'KategoriItemController.update').validator('storeKategoriPeta')
Route.delete('/kategori/:id', 'KategoriItemController.remove')

//Route halaman pengaturan
Route.get('/pengaturan', 'PengaturanController.showPengaturan').middleware('user');

//Route hubungi kam
Route.get('/hubungi-kami', 'FormKontakController.index');
Route.post('/hubungi-kami/kirim', 'FormKontakController.sendEmail');

//route login
Route.get('/login', 'LoginController.showLogin').middleware('tamu')
Route.post('/login', 'LoginController.checkLogin').middleware('tamu')

//route logout
Route.get('/logout', async ({auth, response})=>{
  await auth.logout();
  response.redirect('/');
}).middleware('user')


// Route chat, untuk belajar websocker
Route.get('/chat', ({view})=>{
  return view.render('pages.chat');
})
