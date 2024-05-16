import React from 'react'
import moment from 'moment'
import api from './init'

export function listRooms() {
  return api.get('/rooms').then(res => res.data)
}

export function listRateCards() {
  return api.get('/ratecards').then(res => res.data)
}
