import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MethodsController {
    public async index({response, request}: HttpContextContract) {
      const method = request.method()
      switch (method) {
        case 'GET':
          return response.status(200).json({message: 'Method GET'})
        case 'POST':
          return response.status(200).json({message: 'Method POST'})
        case 'PUT':
          return response.status(200).json({message: 'Method PUT'})
        case 'PATCH':
          return response.status(200).json({message: 'Method PATCH'})
        case 'DELETE':
          return response.status(200).json({message: 'Method DELETE'})
        default:
          return response.status(200).json({message: 'Method no existente'})
      }
    }
}