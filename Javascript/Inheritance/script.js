class Vehicle {
    constructor(brand, speed) {
      this.brand = brand;
      this.speed = speed;
    }
    move() {
      return `${this.brand} is moving at ${this.speed}km/h.`;
    }
  }
  class Car extends Vehicle {
    constructor(brand, speed, fuelType) {
      super(brand, speed);
      this.fuelType = fuelType;
    }
    move() {
      return `The #{this.brand} car runs on ${this.fuelType} at ${this.speed}km/h.`;
    }
  }
  class Bike extends Vehicle {
    constructor(brand, speed, type) {
      super(brand, speed);
      this.type = type;
    }
  
    move() {
      return `🏍️ The ${this.brand} bike is a ${this.type} bike moving at ${this.speed} km/h.`;
    }
  }
  class Truck extends Vehicle {
    constructor(brand, speed, truckType) {
      super(brand, speed);
      this.truckType = truckType;
    }
  
    move() {
      return `🏍️ The ${this.brand} bike is a ${this.truckType} bike moving at ${this.speed} km/h.`;
    }
  }
  document.getElementById("moveBtn").addEventListener('click', function () {
    let vehicleType = document.getElementById("vehicleType").value;
    let brand = document.getElementById("brand").value;
    let speed = document.getElementById("speed").value;
    let extraDetail = document.getElementById("extraDetail").value;
    let output = document.getElementById("output");
    if (brand === "" || speed === "" || extraDetail === "") {
      output.innerText = "Please Enter All The Fields!";
      return;
    }
    let vehicle;
    if (vehicleType === "car") {
      vehicle = new Car(brand, speed, extraDetail);
    }
    else if (vehicleType === "bike") {
      vehicle = new Bike(brand, speed, extraDetail)
    }
    else {
      vehicle = new Truck(brand, speed, truckType)
    }
  
    output.innerText = vehicle.move();
  });
  document.getElementById("vehicleType").addEventListener("change", function () {
    let extraDetail = document.getElementById("extraDetail");
  
    if (this.value === "car") {
      extraDetail.placeholder = "Enter Fuel Type (for Car)";
    } else if (this.value === "bike") {
      extraDetail.placeholder = "Enter Bike Type (e.g., Sports, Cruiser)";
    }
    else {
      extraDetail.placeholder = "Enter Truck Type ";
    }
  });