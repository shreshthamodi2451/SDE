//iife: immediately invoked function expression
(function() {
    console.log("This is an IIFE");
})();

//named iife 
(function greet() {
    console.log("Hello from named IIFE");
})();

//iife with parameters
(function(name) {
    console.log("Hello, " + name);
})("Shreshtha");

//iife is needed to create a new scope and avoid polluting the global namespace, it is also used for data privacy and encapsulation.

