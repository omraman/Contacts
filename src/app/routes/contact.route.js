const express = require('express');
const contactController = require('../controllers/contact.controller')

const router =  express.Router();

// To get all the contacts
router.get('/all', contactController.getContact);

// To add new contacts
router.post('/add-new', contactController.appContact);

// fetch contact by email
router.get('/fetch', contactController.getByEmail);

module.exports = router