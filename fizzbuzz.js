let number = 15;

// DRY ==> Don't repeat yourself
let numberDivisble3 = number % 3 === 0;
let numberDivisble5 = number % 5 === 0;
let numberDivisble3And5 = numberDivisble3 && numberDivisble5;

if (numberDivisble3And5) console.log('FizzBuzz');
else if (numberDivisble3) console.log('Fizz');
else if (numberDivisble5) console.log('Buzz');
else console.log(number);
