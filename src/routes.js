const express = require('express')
const routes = express.Router()

const funcionarios = require('./controllers/controllFuncio')
const departamentos = require('./controllers/controllDepar')
const cargos = require('./controllers/controllCargo')

routes.post('/funcionarios', funcionarios.create)
routes.get('/funcionarios', funcionarios.read)
routes.put('/funcionarios/:id', funcionarios.update)
routes.delete('/funcionarios/:id', funcionarios.deletar)

routes.post('/departamentos', departamentos.create)
routes.get('/departamentos', departamentos.read)
routes.put('/departamentos/:id', departamentos.update)
routes.delete('/departamentos/:id', departamentos.deletar)

routes.post('/cargos', cargos.create)
routes.get('/cargos', cargos.read)
routes.put('/cargos/:id', cargos.update)
routes.delete('/cargos/:id', cargos.deletar)

module.exports = routes