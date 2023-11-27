import { assert } from '@japa/preset-adonis'
import { test } from '@japa/runner'



/*test('isArray', async({client, assert}) => {
  const response = await client.get('/users')
  assert.isArray([response.body])
  })
test('notIsArray', async({client, assert}) => {
    const response = await client.get('/users/1')
    assert.isNotArray(response.body)
    })

test('isEmpity', async({client, assert}) => {
      const response = await client.get('/users/1')
      assert.isEmpty([response.body])
    })

test('isFalse', async({client, assert}) => {
        const response = await client.get('/users/1')
        assert.isFalse(false)})

test.group('UsersPost', () => {
  test('UsersPost', async ({ client }) => {
    const response = await client.post('/users').form({
      username: 'Testeo2',
      email: 'test12@gmail.com',
      password: '123456',
      confirmation_password: '123456',
      active: true
    })
    response.assertStatus(201)
    response.assertBodyContains({data:{
      username: 'Testeo2',
      email: 'test12@gmail.com',
      password: '123456',
      confirmation_password: '123456',
      active: 'true'
  }})
  })
}) */