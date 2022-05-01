const add = function(...args) {
	const sum = args.reduce((total,num)=>{
    return total + num
  },0)
  return sum;
};

const subtract = function(num1,num2) {
	return num1 - num2
};

const sum = function(numbers) {
  return numbers.reduce((total,num)=>{
    total += num;
    return total;
  },0)
  
};

const multiply = function(numbers) {
  return numbers.reduce((total,num)=>{
    total *= num;
    return total;
  },1)
};

const power = function(num,power) {
  return num ** power;

};

const factorial = function(num) {
  if ( num == 0){
    return 1;
  }
  let total = num;
  for (let i = 1; i < num; i ++){
    total *= i;
  }
	return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
