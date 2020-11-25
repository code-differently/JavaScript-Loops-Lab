// For answers to be checked the other problems will need to be commented out due to variables aleady be declared


// Problem 1

for (i = 1; i <= 10; i++){
    console.log(i)
}

// Problem 2

for (i = 1; i <= 10; i++) {
    console.log(i * i)
}

// Problem 3

let n = prompt('Please enter positive number');

for (i = 1; i < n; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// Problem 4

let n = prompt('Please enter positive number')
    n = Number(n)
let m = prompt('Please enter positive number')
    m = Number(m)

let sum = 0

while (n < m) {
     sum += n;
     n++;
 }

 alert(sum)

// started alternative method if n was larger than m

// if (n < m) {
//     sum += n;
//     n++;
// } else if (n > m) {
//     sum += n - 1;
//     n--;
// } 

// Problem 5

do {
    userInput = prompt('Are we there yet?')
} while (userInput !== 'Yes')

alert('Good!')

// Problem 6

let rows = 5;

for (let currentRow = 1; currentRow <= rows; currentRow++) {
    let stars = ""
    for (let j = 1; j <= currentRow; j++) {
        stars += "*";
    }
    console.log(stars);
}

// Solved without nested loop

// let output = ''

// for (let i = 1; i < 6; i++) {
// 	output +=  '*';
// 	console.log(output);
// }

// Problem 7

rows = 4
columns = 4

for (let currentRow = 1; currentRow <= rows; currentRow++) {
    let num = ""
    for (let currentCol = 1; currentCol <= columns; currentCol++){
        let product = ""
        product += currentCol * currentRow
        if (product < 10) {
            num += `  ${product} |`
        } else {
            num += ` ${product} |`
        }
    }
    console.log(num)
}

// Problem 8

function timesTable(rows, columns) {

for (let currentRow = 1; currentRow <= rows; currentRow++) {
    let num = ""
    for (let currentCol = 1; currentCol <= columns; currentCol++){
        let product = ""
        product += currentCol * currentRow
        if (product < 10) {
            num += `  ${product} |`
        } else {
            num += ` ${product} |`
        }
    }
    console.log(num)
}
}