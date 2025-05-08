
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 29 2025
// This file contains the JS functions for index.html

"use strict"

function diviedeNumberBtn() {
  // Get numbers from the user
  let firstNum = parseInt(document.getElementById("first-num").value)
  let secondNum = parseInt(document.getElementById("second-num").value)

  let result = 0
  let count = 0
  let additionText = ""
  let negativeResult = false

  // Check if the result should be negative
  if ((firstNum < 0 && secondNum > 0) || (firstNum > 0 && secondNum < 0)) {
    negativeResult = true
  }

  // Make both numbers positive
  if (firstNum < 0) {
    firstNum = 0 - firstNum
  }

  if (secondNum < 0) {
    secondNum = 0 - secondNum
  }

  // Multiply using repeated addition
  while (count < secondNum) {
    result += firstNum
    additionText += firstNum

    if (count < secondNum - 1) {
      additionText += " + "
    }

    count++
  }

  // Make result negative if needed
  if (negativeResult == true) {
    result = 0 - result
  }

  // Show result
  document.getElementById("result").textContent = additionText + " = " + result
}
