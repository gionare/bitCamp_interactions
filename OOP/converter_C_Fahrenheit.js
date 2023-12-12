// Getter and Setter: Create a class Temperature with a private property _celsius. 
// Implement getter and setter methods for Celsius and Fahrenheit temperatures.
class Temperature{
    #celsius
    constructor(celsius){
        this.#celsius = celsius;
    }

    get celsius() {
        return this.#celsius
    }
    set celsius(value) {
        this.#celsius = value;
    }
    get fahrenheit(){
        return this.#celsius *9/5 +32;
    }
}

const temperatureInstance = new Temperature(25);

console.log("Celsius getter: ", temperatureInstance.celsius);
console.log("Fahrenheit getter: ", temperatureInstance.fahrenheit);