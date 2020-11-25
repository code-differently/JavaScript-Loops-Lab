// Step 1

for (i = 1; i <=10; i++){
    console.log(i);
}

// Step 2

for (i=1; i <=10; i++){
    console.log(i*i);
}

// Step 3

for (let j = 2; j <= 20; j+= 2){
    console.log(j);
}

// Step 4
let num1= prompt("Enter a random number")
let num2= prompt("Enter a bigger random number")

for(i = num1; i < num2; i++){
    if(num1 > num2){
        prompt("Try again!");
    }let i = num1 + num2;
    console.log(i);
}


// Step 5

do {
    user= prompt("Are we there yet?")
}while(user != "Yes")

console.log("Good!")

// Step 6

let output = "";
for (let i = 1; i < 6; i++){
    output += i;
    console.log(output);
}

// Step 7
let result= '';
for(i = 1; i <= 4; i++){
    for(j = 1; j <= 4; j++){
        for(k = " | "; k <= 4; k++){

        }   
        result += (i * j + k);
    }
    result += "\n"  
}
console.log(result);

// Step 8
let answer= '';

for(i = 1; i <= 8; i++){
    for(j = 1; j <= 8; j++){
            for(k = " | "; k <= 8; k++){
            }
        answer += (i * j + k);
    }
    answer += "\n"
}
console.log(answer);