var i, j, subArr, row, num, numStr;
var arr = [];
for (i = 0; i < 5; i++) {
  subArr = [];
  for (j = 0; j < 5; j++) {
    subArr.push(Math.floor((Math.random() * 10) - 5));
  }
  arr.push(subArr);
}
printOut(arr);
console.log();
for (i = 0; i < 5; i++) {
  for (j = 0; j < 5; j++) {
    if (i === j) {
      num = arr[i][j];
      if (num < 0) {
        arr[i][j] = '-';
      } else {
        arr[i][j] = '+';
      }
    }   
  }
}
printOut(arr);


function printOut(arr) {
  for (i = 0; i < 5; i++) {
  row = '';
  for (j = 0; j < 5; j++) {
    numStr = '';
    num = arr[i][j];
    if (Number.isInteger(num)) {
      if (num >= 0) {
        numStr += '+';
      }
    }
    numStr += num;
    row += ' ' + numStr;
  }
  console.log(row);
}
}
