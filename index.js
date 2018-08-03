Driver class:

A driver has many trips, and has many passengers through trips.
new Driver() - initialized with a name; returns a JavaScript object that has attributes of id, and name
trips() - returns all of the trips that a driver has taken
passengers() - returns all of the passengers that a driver has taken on a trip

let driverId = 0
let tripId = 0
let passengerId = 0

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
  }

  trips() {
    return
  }

  passengers() {
    return
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId
    this.name = name
  }

  trips() {
    return
  }

  drivers() {
    return
  }
}

class Trips {
  constructor(driver, passenger) {
    this.driver = driver
    this.passenger = passenger
    this.id = ++tripId
  }

  driver() {
    return this.driver
  }

  passenger() {
    return this.passenger
  }
}
