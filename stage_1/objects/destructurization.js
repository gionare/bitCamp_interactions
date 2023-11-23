const cars = {
    ferrari: {
      brand: "Ferrari",
      model: "488 GTB",
      year: 2022,
      features: ["Turbocharged V8 Engine", "7-Speed Dual-Clutch Transmission", "Top Speed: 205 mph"],
      performance: {
        acceleration: "0-60 mph in 3.0 seconds",
        horsepower: 661,
        torque: "560 lb-ft"
      },
      color: "Red",
      options: ["Carbon Fiber Interior Trim", "Racing Seats", "Premium Sound System"]
    },
}

// console.log(cars.ferrari.brand); // log with console
//* destructurization 
const {model, features, ...rest} = cars.ferrari;
console.log(`Model name is: ${model} 
Features are: ${features}`);
// console.log(rest);
const [engine,meore] = cars.ferrari.features  //masivistvis mchirdeba [] 
console.log(`Engine type: ${engine} ${meore}`);

//* using function preference 
// function performance({acceleration}){
//     console.log(`Acceleration is ${acceleration}`);
// }
// do same with arrow function
performance = ({acceleration}) => {console.log(`Acceleration is ${acceleration}`)}
performance(cars.ferrari.performance); //teach performance source file

//* log horsepower and torque together
let {horsepower, torque} = cars.ferrari.performance;
console.log(`hosepower/torque: ${horsepower}hp/${torque}`);

let HPower = horsepower;
console.log(HPower);

//* change key names for me 
let {horsepower:HP} = cars.ferrari.performance; // Yoveltvis axlidan unda gavadeklariro   ????????
console.log(`HP/torque: ${horsepower}hp/${torque}`);

const {ferrari} = cars;
const {options} = ferrari;  //better way to reach --> cars.ferrari
console.log(options);




