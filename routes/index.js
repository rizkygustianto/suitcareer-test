const route = require('express').Router()

route.post('/event/create')
route.post('/location/create')
route.post('/event/ticket/create')
route.get('/event/:id')
route.post('/transaction/purchase')
route.get('/transaction/:id')


module.exports = route