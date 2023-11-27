import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const { rules } = require('@adonisjs/validator')
export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    username: schema.string({ trim: true }, [
      rules.maxLength(255),
      rules.minLength(3),
      rules.unique({ table: 'users', column: 'username' }),
    ]),
  
    email: schema.string({ trim: true }, [
      rules.maxLength(255),
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({ trim: true }, [
      rules.maxLength(180),
      rules.minLength(6),
    ]),
    confirmation_password: schema.string({ trim: true }, [
      rules.maxLength(180),
      rules.minLength(6),
      rules.confirmed('password'),
    ]),
  })

  public messages: CustomMessages = {
    'username.required': 'Nombre de usuario es requerido',
    'username.maxLength': 'Nombre de usuario es muy largo',
    'username.minLength': 'Nombre de usuario es muy corto',
    'username.unique': 'Nombre de usuario ya existe',
    'email.required': 'Email es requerido',
    'email.maxLength': 'Email es muy largo',
    'email.email': 'Email no es valido',
    'email.unique': 'Email ya existe',
    'password.required': 'Password es requerido',
    'password.maxLength': 'Password es muy largo',
    'password.minLength': 'Password es muy corto',
  }
}
