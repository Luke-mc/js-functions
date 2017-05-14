/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 function numberToString(num){

return num.toString();

 }


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(num){

  return num+1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 function decrease(num){

  return num-1;
 }


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

 function add(num1,num2){


  return num1 += num2;
 }


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 function subtract(x,y){

  var result =  x -= y;

  return result;
 }


/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 function multiply(num1,num2){

  return num1 *= num2;
 }





/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 function divide(num1,num2){

  return num1 /= num2;
 }


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 function square(num1){

  return num1 *= num1;
 }


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(str,num1,num2){


 if(str === "add"){


  console.log(num1+ ' ' + '+' + ' ' +  num2 + ' ' +  '=' + ' ' + add(num1,num2));

  return add(num1,num2);
 }
 if(str === "subtract"){

  console.log(num1+ ' ' + '-' + ' '+ num2 + ' ' +  '=' + ' ' + subtract(num1,num2));
  return subtract(num1,num2);
 }
 if(str === "multiply"){

  console.log(num1+ ' ' + '*' + ' '+ num2 + ' ' +  '=' + ' ' + multiply(num1,num2));
  return multiply(num1,num2);
 }
 if(str === "divide"){

  console.log(num1+ ' ' + '/' + ' '+ num2 + ' ' +  '=' + ' ' + divide(num1,num2));

  return divide(num1,num2);
 }

}



/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 function isGreaterThan(num1,num2){

if(num1 > num2){

    return true
  }
  else{
    return false
  }


 }


/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

 function isLessThan(num1,num2){

if(num1 < num2){

    return true
  }
  else{
    return false
  }


 }


/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

  function areEqual(num1,num2){

if(num1 === num2){

    return true
  }
 if(typeof num1 != typeof num2){
    return false
  }

  else{
    return false
  }


 }


/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(x,y){

  if(x>y){
    return y
  }
  else{
    return x
  }
}


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

 function maximum(x,y){

  if(x<y){
    return y
  }
  else{
    return x
  }
}



/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 function isEven(n){

if(n % 2 ===0){
  return true
}
else{
  return false
}
}



/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 function isOdd(n){

if(n % 1 ===0){
  return true
}
else{
  return false
}
}


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

 function letterGrade(score,max){



if(score <= max){
  if( score/max >= .9 ){
    return "A"
  }
  else if(score/max >= .8){
    return "B"
  }
  else if(score/max >= .7){
    return "C"
  }
   else if(score/max >= .6){
    return "D"
  }
  else{
    return "F"
  }
 }
}


/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

 function incrementReviews(obj){


if(obj.hasOwnProperty('reviews')){

  obj.reviews++ ;

}
else{
  obj.reviews = 1;
}

 return obj

}


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

 function combine(str1,str2){

 var result = str1 + " " + str2;

 return result
 }


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

 function createCircle(num){
var newObject = {};

newObject.circumference = (2*Math.PI) *num;

newObject.area = (num*num) * Math.PI


return newObject

 }

