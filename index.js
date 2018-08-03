let driverId = 0
let tripId = 0
let passengerId = 0

const store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.driverId == this.id
    })
  }

  passengers() {
    return trips().map(function (trip) {
      return store.drivers.find(function (driver) {
        return driver.id == trip.driverId
      })
    })
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.passengerId == this.id
    })
  }

  drivers() {
    return trips().map(function (trip) {
      return store.drivers.find(function (driver) {
        return driver.id == trip.driverId
      })
    })
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId
    store.trips.push(this)
  }

  driver() {
    return this.driver
  }

  passenger() {
    return this.passenger
  }
}
