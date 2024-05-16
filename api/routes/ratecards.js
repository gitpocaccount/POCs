const express = require('express')
const moment = require('moment')
const momentTimezone = require('moment-timezone')
const Ratecard = require('../models/Ratecard')
const { requireJWT } = require('../middleware/auth')

const router = new express.Router()

router.get('/ratecards', requireJWT, (req, res) => {
  Ratecard.find()
    .then(ratecards => {
      res.json(ratecards)
    })
    .catch(error => {
      res.json({ error })
    })
})

router.post('/ratecards', requireJWT, (req, res) => {
  Ratecard.create(req.body)
    .then(ratecard => {
      res.status(201).json(ratecard)
    })
    .catch(error => {
      res.status(400).json({ error })
    })
})

// Function to convert UTC JS Date object to a Moment.js object in AEST
const dateAEST = date => {
  return momentTimezone(date)
}


module.exports = router
