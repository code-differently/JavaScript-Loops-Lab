function getTableFourByFour() {
    let table = "";
    for (let i = 1; i <= 6; i++) {
      for (let j = 1; j <= 6; j++) {
        // lenght of number is 1
        const lengthOfNumber = getLengthOfNumber(i * j);
        // 1 * 1 == 1
        const product = i * j;
        //"  1"
        let paddedProduct = getPaddedString(product, 3 - lengthOfNumber);
        //"|  1"
        table += "|" + paddedProduct;
      }
      table += "|" + "\n";
    }
    return table;
  }
  function getLengthOfNumber(number) {
    return number.toString().length;
  }
  function getPaddedString(stringToPad, numberOfPadding) {
    for (let i = 0; i < numberOfPadding; i++) {
      stringToPad = " " + stringToPad;
    }
    return stringToPad;
  }
  const table = getTableFourByFour();
  console.log(table);
  