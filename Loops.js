// 1. Display the numbers 1 to 10 in the console. 
for ( let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Display the square numbers up to 100 in the console. 
for ( let i = 1; i <= 10; i++) {
    let y = Math.pow(i, 2);
    console.log(y);
}


// 3. Display the positive even number less then n in the console. 
for (let i = 1; i < 20; i++) {
    if (i % 2 === 0)
    console.log(i);
}

// 4. Calculate the sum of the number from n to, but not including m, and returns the answer. 
let sum = 0;
for (let i =5; i < 10; i++) {
    sum += i;
}
console.log(sum);

// 5. Are We There Yet. 
do {
    question = prompt("Are we there yet?");
} while (question != "Yes")
console.log("Good!");

// 6. Triangle
let stars = '';
for (i = 1; i <= 6; i++) {
    for (s = 1; s < i; s++){
        stars = stars + ("*");
    }
console.log(stars)
stars = '';
}

// 7. Table Square
let result = '';
for (i = 1; i <=4; i++) {
    for (a = 1; a <= 4; a++) {
        for (b = " | "; b <= 4; b++) {
        }
        result += (i * a + b)
    }
    result += "\n"
}
console.log(result);

//8. Table Square 2
let square2 = '';
for (i = 1; i <= 6; i++) {
    for (a = 1; a <= 6; a++) {
        for (b = " | "; b <= 6; b++) {
        }
        square2 += (i * a +b);
    }
    square2 += "\n"
}
console.log(square2);
