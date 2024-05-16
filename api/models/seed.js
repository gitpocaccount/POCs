const Room = require('./Room')

Room.create([
  // Level 8
  {
    name: 'Room 1',
    floor: '8',
    capacity: 18,
    assets: {
      pcLab: true
    }
  },
  {
    name: 'Room 2',
    floor: '8',
    capacity: 18,
    assets: {
      projector: true
    }
  },
  {
    name: 'Room 3',
    floor: '8',
    capacity: 18,
    assets: {
      projector: true,
      opWalls: true
    }
  },
  {
    name: 'Room 4',
    floor: '8',
    capacity: 24
  },
  {
    name: 'Room 5',
    floor: '8',
    capacity: 18,
    assets: {
      opWalls: true
    }
  },
  // Level 13
  {
    name: 'Room 1',
    floor: '13',
    capacity: 20,
    assets: {
      opWalls: true
    }
  },
  {
    name: 'Room 2',
    floor: '13',
    capacity: 20,
    assets: {
      opWalls: true
    }
  },
  {
    name: 'Room 3',
    floor: '13',
    capacity: 20,
    assets: {
      opWalls: true
    }
  },
  {
    name: 'Room 4',
    floor: '13',
    capacity: 20,
    assets: {
      projector: true,
      opWalls: true
    }
  },
  {
    name: 'Room 5',
    floor: '13',
    capacity: 20,
    assets: {
      projector: true
    }
  }
])
  .then((rooms) => {
    console.log(`Created ${rooms.length} rooms.`)
  })
  .catch((error) => {
    console.error(error)
  })