module.exports = function zeros(expression) {
  let mas = expression.split('*');
  let result = 1;
  let count = 0;
  function factorial(n) {
    return (n != 1) ? BigInt(n) * BigInt(factorial(n - 1)) : 1;
  }
  function doubleFactorial(n) {
    return (n != 1 && n != 0) ? BigInt(n) * BigInt(doubleFactorial(n - 2)) : 1;
  }

  for (i = 0; i < mas.length; i++) {
    let element = mas[i];
    let num;
    if (element.includes('!!')) {
      num = element.slice(0, -2);
      num = +num;
      result = BigInt(doubleFactorial(num)) * BigInt(result);
    }
    else if (element.includes('!')) {
      num = element.slice(0, -1);
      num = +num;
      result = BigInt(factorial(num)) * BigInt(result);
    }
  }
result=result.toString();

  for (i = 0; i < result.length; i++) {
    if (result[i] == '0') {
      count = count + 1;
    }
    else {
      count = 0;
    }
  }
   return(count);

}
