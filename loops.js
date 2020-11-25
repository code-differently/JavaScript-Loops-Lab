//Part 1
  for (i = 1; i < 11; i++) {
    console.log(i);
  } 
  
//Part 2
  for (i = Math.sqrt(1); i <= 10; i++) {
    console.log(i*i);
}

//Part 3
  let n = 20
  for (i = 1; i < n; i++) {
    if (i % 2 === 0) 
      console.log(i);
}

//Part 4
function numberSum(n,m) {
  let total = 0;
    for (let i = n; i < m; i++){
          total += i;
}
    return total;
}
    console.log(numberSum());


//Part 5
  let AreWeThere = prompt ("Are we there yet?");

  if (AreWeThere === "yes") {
        alert("Good!");
} else {
  while (AreWeThere !== "yes")
        AreWeThere = prompt ("Are we there yet?");
        alert("Good!"); 
}

//Triangle Part 6
  
  let output = " ";

  for (let k=1; k<6; k++) { 
    output += k + " ";
    console.log(output);
}

//Part 7

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
    // end  first outer loop
      completedTable = completedTable + "|\n";
}
        return completedTable;
}
      console.log(makeSmallMultiplicationTable(4,4))

//
function makeSmallMultiplicationTable(maxTotalRows, maxTotalColumns) {
        // print columns and row numbers
        //   const maxTotalRows = 4;
        //   const maxTotalColumns = 4;
    let completedTable = "";
        for (let row = 1; row <= maxTotalRows; row++) {
          //OUTER LOOP
        for (let column = 1; column <= maxTotalColumns; column++) {
            //INNER LOOP
            completedTable = completedTable + `|${row * column}`;
          }
          // end  first outer loop
            completedTable = completedTable + "|\n";
        }
              return completedTable;
      }
        console.log(makeSmallMultiplicationTable(6, 6))

        