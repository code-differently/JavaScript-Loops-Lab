/*## 1) One to Ten
Displays the numbers 1 to 10 in the console.<br>

console.log( "Numbers" )

for (let i = 1; i <= 10; i++) {
   console.log(i);
}


## 2) Squares
Displays the square numbers up to 100 in the console.

console.log( "Square Numbers" )

for (let i = 0; i <= 100; i++) {
  let num = Math.sqrt(i);
  if (num % 1 == 0) {
    console.log(i);
}
}
  

## 3) Even Under N
Displays the positive even number less then n in the console.

console.log( "Even Under N" )

for (let n = 2; n < 20; n += 2) {
    console.log(n);
} 


## 4) Sum
Calculates the sum of the number from n to, but not including m, and returns the answer.

let numSum = 0;
  for (let i = 5; i < 10; i++){
        numSum += i; 
}
  console.log(numSum);
  

## 5) Are We There Yet
Should prompt the user "Are we there yet?" until the user enters "Yes". When the user enters "Yes", the program should display "Good!" in the console and exit.

let weAreThere = false;
while (!weAreThere) {
  let userResponse = prompt ("Are we there yet?");
    if (userResponse == "yes") {
      weAreThere = true;
  }
}
console.log("Good!");


## 6) Triangle
Should use nested loops to produce the following pattern in the console.

let line, triangle;
line = triangle = "";

for (let row = 1; row <= 5; row++) {
  line = ""
  for (let x = 0; x < row; x++) {
    line += "*";
  }
  triangle += line + "\n";
}
console.log(triangle);


## 7) Table Square
Should use nested loops to produce a 4x4 table square in the console.

let rows = 4
let columns = 4
let table = '';

for (let i = 1; i <= 4; i++) {
  for (let s = 1; s <= 4; s++) {
    if (i > 0 && s > 0) {
      table += (i * s) + '|';
    }
   } 
      table += '\n'
  }
    console.log(table);
 

## 8) Table Square 2
Extend your answer to the last question to produce an NxN table square in the console.

let rows = 6
let columns = 6
let table = '';

for (let i = 1; i <= 6; i++) {
for (let s = 1; s <= 6; s++) {
  if (i > 0 && s > 0) {
    table += (i * s) + '|';
  }
 } 
    table += '\n'
}
  console.log(table);
*/
