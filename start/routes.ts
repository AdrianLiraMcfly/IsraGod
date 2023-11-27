/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.any('/methods', 'MethodsController.index')

Route.group(() => {
  Route.get('/', 'UsersController.index')
  Route.get('/:id', 'UsersController.getUser')
  Route.post('/users', 'ValidationsController.createUser')
  Route.put('/:id', 'UsersController.update')
  Route.delete('/:id', 'UsersController.destroy')
}).prefix('/users')

Route.group(() => {
  Route.get('/', 'PostsController.index')
  Route.get('/:id', 'PostsController.getPost')
  Route.post('/', 'PostsController.store')
  Route.put('/:id', 'PostsController.update')
  Route.delete('/:id', 'PostsController.destroy')
}).prefix('/posts')

Route.group(() => {
  Route.get('/', 'CommentsController.index')
  Route.get('/:id', 'CommentsController.getComment')
  Route.post('/', 'CommentsController.store')
  Route.put('/:id', 'CommentsController.update')
  Route.delete('/:id', 'CommentsController.destroy')
}).prefix('/comments')

Route.get('/users/getone/:id', 'UsersController.getOne')
Route.post('/users', 'ValidationsController.createUser')