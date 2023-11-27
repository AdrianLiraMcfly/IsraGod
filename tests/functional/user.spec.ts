import { assert } from '@japa/preset-adonis'
import { test } from '@japa/runner'

test.group('Users', () => {
  test('UsersPost', async ({ client }) => {
    const response = await client.post('/users').form({
      username: 'testeo12345',
      email: 'testeo12345@gmail.com',
      password: '123456',
      confirmation_password: '123456',
      active: true
    })
    response.assertStatus(201)
    response.assertBodyContains({data:{
      username: 'testeo12345',
      email: 'testeo12345@gmail.com',
      password: '123456',
      confirmation_password: '123456',
      active: true
  }})
})

test('UsersGet', async ({ assert,client }) => {
  const response = await client.get('/users')
  response.assertStatus(200)
  assert.isArray(response.body)
})

test('UsersGetOne', async  ({ assert,client }) => {
  const response = await client.get('/users/1')
  response.assertStatus(200)
  assert.isNotArray(response.body)
})

test('UsersPut', async ({ client }) => {
  const response = await client.put('/users/1').form({
    username: 'Testeo2',
    email: 'testeo2@gmail.com',
    password: '123456',
  })
  response.assertStatus(200)
  response.assertBodyContains('Usuario actualizado')
})

test('UsersDelete', async ({ client, assert }) => {
  const response = await client.delete('/users/1')
  response.assertStatus(204)
  assert.isEmpty(response.body)
})
})
