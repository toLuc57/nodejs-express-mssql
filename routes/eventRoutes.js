'use strict';

const express = require('express');
const eventcontroller = require('../controllers/eventController');
const router = express.Router();

const {getEvents, getEvent, addEvent, updateEvent, deleteEvent} = eventcontroller;

router.get('/categories', getEvents);
router.get('/category/:id', getEvent);
router.post('/category', addEvent);
router.put('/category/:id', updateEvent);
router.delete('/category/:id', deleteEvent);

module.exports = {
    routes: router
}