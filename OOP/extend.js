class Vehicle {
    constructor(make, model){
        this.make = make;
        this.model = model;
    }
    startEngine(){
        console.log("Starting engine: ");
    }
}

class ElectricVehicle  extends Vehicle{
    constructor(make, model){
        super(make, model);
    };
    // Override startEngine method with new method
    startEngine(){
        console.log("Electric Vehicle");
        super.startEngine();
    }

}
// let electricVehicle = new ElectricVehicle("tesla", "S")
// electricVehicle.startEngine();
