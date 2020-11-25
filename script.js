// Step 1

for (i = 1; i <=10; i++){
    console.log(i);
}

// Step 2

for (i=1; i <=10; i++){
    console.log(i*i);
}

// Step 3

for (n = 2; n >= 20; n+=2){
    console.log(n);
}
// Step 4
let sum = 0;

for (n = 5; n < 10; n++){
       n += sum;
       console.log(sum)
}


// Step 5

let user = prompt("Are we there yet?")
let correctAnswer= "Yes"


    


// Step 6

let output = "";
for (let i = 1; i < 10; i++){
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