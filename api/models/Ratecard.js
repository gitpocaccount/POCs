const mongoose = require('./init')
const Schema = mongoose.Schema
const moment = require('moment')


const rateCardsSchema = new Schema({
  name: { type: String, index: true, required: true },
  floor: { type: String, required: true },
  capacity: Number,
  assets: {
    macLab: { type: Boolean, default: false },
    pcLab: { type: Boolean, default: false },
    projector: { type: Boolean, default: false },
    tv: { type: Boolean, default: false },
    opWalls: { type: Boolean, default: false },
    whiteBoard: { type: Boolean, default: false }
  },
 // bookings: [bookingSchema]
})

const RateCard = (module.exports = mongoose.model('RateCards', rateCardsSchema))
