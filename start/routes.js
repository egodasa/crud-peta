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

Route.on('/').render('pages/index')
Route.get('/icon/:id?', 'IconController.index')
Route.post('/icon', 'IconController.store')
Route.put('/icon/:id/edit', 'IconController.update')
Route.delete('/icon/:id', 'IconController.remove')

Route.get('/peta/:id?', 'PetaController.index')
Route.post('/peta', 'PetaController.store')
Route.put('/peta/:id/edit', 'PetaController.update')
Route.delete('/peta/:id', 'PetaController.remove')
