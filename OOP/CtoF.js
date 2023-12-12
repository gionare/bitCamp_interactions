// Getter and Setter: Create a class Temperature with a private property _celsius. 
// Implement getter and setter methods for Celsius and Fahrenheit temperatures.



class Temp {
    #celsius;
    constructor (celsius) {
        this.#celsius = celsius
    }
    get celsius(){
        return this.#celsius
    }
    set celsius(degree){
        return this.#celsius = degree;
    }

    get farenheit(){
        return this.#celsius * (9/5) + 32;
    }
    set farenheit(degree){
        return this.#celsius = (degree - 32) * (5/9);
    }
}
const converter = new Temp(0);
// console.log(converter.celsius = 30);

console.log(converter.farenheit = 32);
console.log(converter.celsius);



