import { test } from '@japa/runner'

test.group('Users2', () => {
   test('Datos incompletos' , async ({ client }) => {
      const response = await client.post('/users').form({
        username: 'raul@g mail.com',
        email: 'raul@gmail.com'
   });
    response.assertStatus(400)
    response.assertBodyContains({
        errors: [
          {
            message: 'required validation failed on password',
            field: 'password',
            validation: 'required',
          },
          {
            message: 'required validation failed on confirmation_password',
            field: 'confirmation_password',
            validation: 'required',
          },
        ],
      })
    })
    test('Cambiar contraseña', async ({ client }) => {
      const response = await client.put('/users/1').form({
        password: '1234568',
        confirmation_password: '1234568',
      })
      response.assertStatus(200)
      response.assertBodyContains('Contraseña actualizada')
    })

    test('restablecer contraseña', async ({ client }) => {
      const response = await client.put('/users/1').form({
        email: 'usuario@gmail.com',
      })
      response.assertStatus(200)
      response.assertBodyContains('enlace enviado a su correo')
    })

    test('Iniciar sesión', async ({ client }) => {
      const response = await client.post('/users').form({
        email: 'jorge.liralopez11@gmail.com',
        password: '123456',
    })
    response.assertStatus(200)
    response.assertBodyContains({message: 'Bienvenido'})
})

    test('Cerrar sesión', async ({ client }) => {
      const response = await client.post('/user')
      response.assertStatus(200)
      response.assertBodyContains({message: 'Sesión cerrada'})
      })
})
