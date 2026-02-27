const express = require('express');
const router = require('express').Router();
const  testController  = require('../controller/testController');
router.post('/ApiTestser/testPost', testController.testPost); //1

module.exports = router;