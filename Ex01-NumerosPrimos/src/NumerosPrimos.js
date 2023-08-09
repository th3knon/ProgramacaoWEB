const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  if (number <= 3) {
    return true;
  }
  
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}

rl.question("Digite um número inteiro positivo: ", userInput => {
  const number = parseInt(userInput);

  if (isNaN(number)) {
    console.log("Por favor, digite um número válido.");
  } else {
    const isNumberPrime = isPrime(number);
    if (isNumberPrime) {
      console.log(`${number} é um número primo.`);
    } else {
      console.log(`${number} não é um número primo.`);
    }
  }

  rl.close();
});
