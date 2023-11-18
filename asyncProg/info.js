//direct style, using R E T U R N
// function add(a, b) {
//   return a + b;
// }
// console.log(add(1,2));

function add(a, b, callback){
 callback(a + b);
}
console.log("before");
add(1, 3, function(sum){console.log("Resul: " + sum);} );
console.log("after");

// Asynchronous continuation-passing style
// callback should be a function 
// 
function addSync(a, b, callback){
  setTimeout( function(){ callback(a+b)} ,100);  // setTimeout(funcref, time);
}
console.log("before");
addSync(1, 2, function(Sum){console.log("callback function Result equals: " + Sum);});
console.log("after");