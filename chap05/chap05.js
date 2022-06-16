
// Say hello to the user
/* let first = prompt("first name: ")
let last = prompt("last name: ") */
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }
  // TODO: ask user for first and last name
  // TODO: call sayHello() and show its result
console.log(sayHello(prompt("first name: "), prompt("last name: ")))


// Square the given number x
function square1(x) {
  // TODO: complete the function code
  return x*x
}

// Square the given number x
const square2 = x => x*x// TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

// TODO: write the min() function
let min = (x,y)=> x > y ? y : x
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

// TODO: complete calculate program
          /* Calculator */
let calculate = (num1, operator, num2)=> {
  let result 
  switch(operator){
    case "+":
      result = num1 + num2
      break
    case "*":
      result = num1 * num2
      break
    case "-":
      result = num1 - num2
      break
    case "/":
      result = num1 / num2
      break
    default:
      console.log("enter a valid operator!")
  }
  return result
}
// To debug ^
console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

//exponentiation operator
console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3

// TODO: Circumference and area of a circle
let circumference = (r)=> 2*Math.PI * r
let area = (r)=> Math.PI * (r**2)
console.log(area(1))