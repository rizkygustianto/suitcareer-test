const route = require('express').Router()
const Controller = require('../controllers/Controller')


route.post('/event/create', Controller.createEvent)
route.post('/location/create', Controller.createLocation)
route.post('/event/ticket/create', Controller.createTicket)
route.get('/event/:id', Controller.getEventById)
route.post('/transaction/purchase', Controller.createTransaction)
route.get('/transaction/:id', Controller.getTransactionById)

// DEV
route.get('/gettransactions', Controller.getAllTransaction)
route.get('/getevents', Controller.getAllEvents)

module.exports = route