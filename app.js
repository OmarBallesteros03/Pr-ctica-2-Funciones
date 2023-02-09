function greet() {
    console.log("Hello");
}

greet();
console.log(greet);

//functions as parameters
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

//function expression
let greetMe = function(){
    console.log("Hello from the function expression");
}
greetMe();

//arrow function
let greetMeArrow = () => {console.log("Hola Arrow");}
greetMeArrow();

let saludo = (nombre, tratamiento) => {
    console.log("Hola " + tratamiento + " " + nombre);
}
saludo("Miguel","Sr.");

let cuadrado = numero => {
    return numero * numero;
}
console.log(cuadrado(3));
//código más compacto
let cuadrado2 = numero => numero * numero;
