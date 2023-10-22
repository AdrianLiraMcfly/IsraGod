import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import {BelongsTo, belongsTo} from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Comment from './Comment'

export default class User extends BaseModel {
  
  @column({isPrimary: true})
  public id: number

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public password: string


}


module.exports = User
