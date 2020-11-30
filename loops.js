//JavaScript Loops Lab

// 1) One to Ten
console.log ("One to Ten");

for (let i=1; i<=10; i++) {
    console.log (i);
}


// 2) Squares
console.log ("Squares");

for (let i=1; i<=10; i++) {
    let square = i*i;
    console.log (square);
}


// 3) Even Under N
console.log ("Even Under N");

let n = 20;
for (let i=2; i<n; i+=2) {
    console.log (i);
}


// 4) Sum
console.log ("Sum");

let sum = 0;
for (let i = 5; i <10; i++){
    sum = (sum + i)
} 
console.log (sum);


// 5) Are We There Yet
console.log ("Are We There Yet");

let userResp;

do {
    userResp = prompt("Are We There Yet?");
if (userResp === "Yes"){
    alert ("Good!");
    } 
} while (userResp !== "Yes");


// 6) Triangle
console.log ("Triangle");

let triangle = "";

for (let row=1; row<=5; row++) {
    for (let i=0; i<row; i++){
        triangle += "*";
    }
    triangle += "\n";
}
console.log (triangle);


// 7) Table Square
console.log ("Table Square");
/*let tableSquare = "";

for (let i = 1; i<5; i++) {
    for ( j = 2; j < 17; j + 2){

    } 
    tableSquare = `${i} + "|" + ${j}`;
    console.log(tableSquare);
}
    
  */ 
   


// 8) Table Square 2
console.log ("Table Square 2"); 
