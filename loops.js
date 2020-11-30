/*Problem 1
for (i = 1; i <= 10; i++){
    console.log(i)*/

/*Problem 2
for (let i = 1; i <=10; i++) {
     console.log(i * i); 
}*/

/*Problem 3
let n = 20
    for (i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i)
    }
}*/

/*Problem 5
do {
    user = prompt("Are we there yet")
}while (user !== "Yes")
alert("Good!") */
    


//Problem 6

/*for (let i = 1; i <= 5; i++) {
    let stars = ""
    for (let j = 1; j <= i; j++) 
        stars += "*";
    
    console.log(stars);
}*/

//Problem 7
/*rows = 4
columns = 4

for (let currentRow = 1; currentRow <= rows; currentRow++) {
    let num = ""
    for (let currentCol = 1; currentCol <= columns; currentCol++){
        let product = ""
        product += currentCol * currentRow
        if (currentCol === 1){
            num += `|`
        }
        if (product < 10 && currentCol > 1) {
            num += `  ${product} |`
        } else {
            num += ` ${product} |`
        }
    }
    console.log(num)
}*/

//Problem 8
rows = 6
columns = 6

for (let currentRow = 1; currentRow <= rows; currentRow++) {
    let num = ""
    for (let currentCol = 1; currentCol <= columns; currentCol++){
        let product = ""
        product += currentCol * currentRow
        if (currentCol === 1){
            num += `|`
        }
        if (product < 10 && currentCol > 1) {
            num += `  ${product} |`
        } else {
            num += ` ${product} |`
        }
    }
    console.log(num)
}