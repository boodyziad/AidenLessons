for (let i = 1; i <= 100; i++) {
  let numberDivisble3 = i % 3 === 0;
  let numberDivisble5 = i % 5 === 0;
  let numberDivisble3And5 = numberDivisble3 && numberDivisble5;

  if (numberDivisble3And5) console.log('FizzBuzz');
  else if (numberDivisble3) console.log('Fizz');
  else if (numberDivisble5) console.log('Buzz');
  else console.log(i);
}
