'use strict';

let total = 0;          
let inputData = "";     
let calcOperator = "+";
let dataFlg = 1;

function doClear() {
  total = 0;
  inputData = "";
  calcOperator = "+";
  dataFlg = 1;
  document.myForm.result.value = 0;
}

function doValue(number) {
  dataFlg = 0;
  inputData += number;
  document.myForm.result.value = Number(inputData);
}

function doCalculate(data) {
  if (dataFlg === 0 && calcOperator != '=') {
    dataFlg = 1;
    total = exeCalc(total, inputData, calcOperator);
    inputData = "";
    calcOperator = data;
    document.myForm.result.value = total;
    }
  
  if (dataFlg === '=') {
    dataFlg = 1;
    calcOperator = data;
    inputData = "";
  } else {
    dataFlg = 1;
    calcOperator = data;
  }
}

function exeCalc(total, inputData, calcOperator) {
  let tmpData = Number(inputData);
  let tmpTotal = Number(total);
  
  if (calcOperator === "+") {
    return tmpTotal + tmpData;
  }
  else if (calcOperator === "-") {
    return tmpTotal - tmpData;
  }
  else if (calcOperator === "*") {
    return tmpTotal * tmpData;
  }
  else if (calcOperator === "/") {
    return tmpTotal / tmpData;
  }
}

function doDicimalPoint(number) {
  if (number === ".") {
    if (inputData.indexOf(".") === -1) {
      inputData += number;
      document.myForm.result.value = inputData;
      dataFlg = 0;
    }
  } else {
    dataFlg = 0;
    inputData += number;
    document.myForm.result.value = Number(inputData);
  }
}