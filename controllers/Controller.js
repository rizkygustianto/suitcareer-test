const { Event, Location, Ticket, Transaction } = require('../models')

class Controller {
    static async createEvent(req,res) {
        try {
            let params = {
                name: req.body.name,
                description: req.body.description,
                locationId: req.body.locationId,
                start_date: req.body.start_date,
                end_date: req.body.end_date
            }
            const event = await Event.create(params)
            res.status(201).json({msg: 'Success create event', event})
        } catch (error) {
            console.log('createEvent', error);
        }
    }
    static async createLocation(req,res) {
        try {
            let params = {
                name: req.body.name
            }
            const location = await Location.create(params)
            res.status(201).json({msg: 'Success create location', location})
        } catch (error) {
            console.log('createLocation', error);
        }
    }
    static async createTicket(req,res) {
        try {
            let params = {
                eventId: req.body.eventId,
                price: req.body.price,
                quota: req.body.quota,
                type_description: req.body.type_description
            }
            const ticket = await Ticket.create(params)
            res.status(201).json({msg: 'Success create ticket', ticket})
        } catch (error) {
            console.log('createTicket', error);
        }
    }
    static async createTransaction(req,res) {
        try {
            const params = {
                ticket_qty: req.body.ticket_qty,
                ticketId: req.body.ticketId,
                eventId: req.body.eventId
            }
            const event = await Event.findByPk(req.body.eventId)
            const ticket = await Ticket.findByPk(req.body.ticketId)
            if (event.start_date <= new Date) {
                if (ticket.quota >= 1) {
                    const transaction = await Transaction.create(params)
                    const ticketBought = await Ticket.decrement({'quota': req.body.ticket_qty},{ where: { id: req.body.ticketId } })
                    res.status(201).json({transaction})
                    console.log('ticketBought', ticketBought);
                } else {
                    console.log('ticket quota less than 1');
                }
            } else {
                console.log('event start date has passed');
            }
        } catch (error) {
            console.log('createTransaction', error);
        }
    }
    static async getAllEvents(req,res) {
        try {
            const events = await Event.findAll({include: [ Ticket, Location ] })
            console.log(events);
            res.status(200).json({events})
        } catch (error) {
            console.log('getAllEvents', error);
        }
    }
    static async getEventById(req,res) {
        try {
            const event = await Event.findByPk(req.params.id, {include: [ Ticket, Location ] })
            res.status(200).json({event})
        } catch (error) {
            console.log('getEventById', error);            
        }
    }
    static async getAllTransaction(req,res) {
        try {
            const transactions = await Transaction.findAll({include: [ Ticket, Event ] })
            res.status(200).json({transactions})
        } catch (error) {
            console.log('getAllTransactions', error);
        }
    }
    static async getTransactionById(req,res) {
        try {
            const transaction = await Transaction.findByPk(req.params.id, {include: [ Ticket, Event ] })
            res.status(200).json({transaction})
        } catch (error) {
            console.log('getTransactionById', error);
        }
    }
}

module.exports = Controller