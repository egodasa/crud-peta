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

Route.get('/peta/:id?', 'PetaController.index')
Route.post('/peta', 'PetaController.store')
Route.put('/peta/:id/edit', 'PetaController.update')
Route.delete('/peta/:id', 'PetaController.remove')
Route.get('/peta/kategori/:id', 'PetaController.petaByKategori')

Route.get('/kategori/:id?', 'KategoriItemController.index')
Route.post('/kategori', 'KategoriItemController.store')
Route.put('/kategori/:id/edit', 'KategoriItemController.update')
Route.delete('/kategori/:id', 'KategoriItemController.remove')
