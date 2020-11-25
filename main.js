// Part One
let i = 1
while (i <= 10){
    console.log(i)
    i++
}


// Part Two 
    for (let i = 1; i <= 10; i++ ){
    console.log(i * i)
    }


//Part Three
for (let i = 1; i < 10; i++){
    console.log( i + i)
}


// Part Four 
function numberSum(n,m) {
    let total = 0;
      for(let i = n; i < m; i++){
        total += i;
      }
      return total;
  }
  console.log(numberSum());

  
//Part Five 
let userAnswer = prompt("Are we there yet?")

if (userAnswer == "yes"){
    alert("Good!");
} else {
    while (userAnswer != "yes")
    userAnswer = prompt("Are we there yet?")
    alert("Good!");
} 

//Part Six 
let output = " ";
for (let k=1; k<6; k++) {
  output += k + " ";
  console.log(output);
}

// Part Seven
function makeSmallMultiplicationTable() {
    // print columns and row numbers
      const maxTotalRows = 4;
      const maxTotalColumns = 4;
    let completedTable = "";
    for (let row = 1; row <= maxTotalRows; row++) {
      //OUTER LOOP
      for (let column = 1; column <= maxTotalColumns; column++) {
        //INNER LOOP
        completedTable = completedTable + `|${row * column}`;
      }
      completedTable = completedTable + "|\n";
    }
    return completedTable;
  }
  console.log(makeSmallMultiplicationTable(4, 4))  


// Part Eight 
function makeMediumMultiplicationTable(maxTotalRows,maxTotalColumns) {
    let completedTable = "";
    for (let row = 1; row <= maxTotalRows; row++) {
      //OUTER LOOP
      for (let column = 1; column <= maxTotalColumns; column++) {
        //INNER LOOP
        completedTable = completedTable + `|${row * column}`;
      }
      completedTable = completedTable + "|\n";
    }
    return completedTable;
  }
  console.log(makeMediumMultiplicationTable(6, 6))