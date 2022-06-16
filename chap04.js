// Carousel
function carousel() {
    let input = prompt("enter number of carousel turns")
    for (let i = 1; i <= input; i++) {
      console.log(`turn n°${i}`)
    }
  }
  
      //is it Odd ?
  
  function imparity() {
    let input = Number(prompt("enter an initial number:"))
    let i = 1
    while (i <= input + 9) {
      if (i % 2 !== 0) {
        console.log(`${i} is odd`)
        i++
      }
      i++
    }
  }
  
      // Input Validation
    
  function inputValidation() {
    let input = 0
    while (input < 50 || input > 100) {
      input = Number(prompt("enter a number between 50 and 100: "))
    }
  }
  
      //multiplication Table
    
  function multipleTable(){
  let input = 0
  //while loop making sure the input is between 2 and 9
  while(input < 2 || input > 9){
    // get user input
    input = Number(prompt("enter a num: "))
  }
  
  //loop through the multiplication of the number by (2 to 9)
  for(let i=2; i<=9; i++){
      console.log(`${input}*${i} = ` + input*i)
  }
  
  }
  
  // FizzBuzz
  
  /*Write a program that shows all numbers between 1 and 100 with the following exceptions:
  
  It shows "Fizz" instead if the number is divisible by 3.
  
  It shows "Buzz" instead if the number is divisible by 5 and not by 3.
  
  When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.*/
  
  function fizzBuzz(){
      for(let i=1; i<=100; i++){
        if(i % 3 == 0){
        console.log("Fizz")
        }else if(i % 5 == 0){
        console.log("Buzz")
      }else
      console.log(i)
    }
  }
  fizzBuzz()