const express = require('express');

const router = express.Router();

const phonesControllers = require('../controllers/phones-controllers');

router.get('/phones', phonesControllers.getPhones);

router.get('/phones/:phoneId', phonesControllers.getPhoneById);

module.exports = router;
