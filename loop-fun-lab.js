// 1. Displays the numbers 1 to 10 in the console.

for ( let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Displays the square numbers up to 100 in the console.

for ( let i = 1; i <= 10; i++) {
    let square = i * i;
    console.log(square);
}

// 3. Displays the positive even number less then n in the console.

let n = prompt("Pick a number.");
for ( let i = 2; i < n; i += 2) {
    console.log(i);
}

// 4. Calculates the sum of the number from n to, but not including m, and returns the answer.

function numberSum(n, m) {
    
    let sum = 0;
    for( i = n ; i < m; i++) {
        sum += i;
    }
    return sum;
}

// 5. Should prompt the user "Are we there yet?" until the user enters "Yes". When the user enters "Yes", the program should display "Good!" in the console and exit.

do {
    question = prompt("Are we there yet?");
    response = question.toLowerCase();
} while ( response != "yes")
console.log("Good!");

// 6. Should use nested loops to produce the following pattern in the console.

let pattern;
for ( i = 1; i <= 6; i++) {
   for (j = 1; j < i; j++) {
        pattern = pattern + ("*");        
      }
    console.log(pattern);
    pattern = '';
}

// 7. Should use nested loops to produce a 4x4 table square in the console.

for (let row = 1; row <= 4; row++) {
    let output = ""
    for (let col = 1; col <= 4; col++){
        let result = ""
        result += col * row
        if (result < 10) {
            output += `  ${result} |`
        } else {
            output += ` ${result} |`
        }
    }
    console.log(output)
}

// 8. Extend your answer to the last question to produce an NxN table square in the console.

function createGrid(y, x) {
    for (let row = 1; row <= y; row++) {
        let output = ""
        for (let col = 1; col <= x; col++){
            let result = ""
            result += col * row
            if (result < 10) {
                output += `  ${result} |`
            } else {
                output += ` ${result} |`
            }
        }
        console.log(output)
    }
}