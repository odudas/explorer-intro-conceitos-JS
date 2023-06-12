/*
  Argumentos e Parâmetros

  * Funções anônimas ou expressões de função

  const sum = function(parametros){}

  * Execução da função

  sum(argumentos)
*/

const sum = function (number1, number2) {
  console.log(number1 + number2);
};

sum(2, 3);

/*
  Retornando valores dentro da função

  * Quando uma função que não tem retorno, vira undefined
  * Quando há um retorno a execução para e retorna o que vem na frente "total"
*/

const soma = function (numberX, numberY) {
  let total = numberX + numberY;
  return total;
};

let numberX = 34;
let numberY = 25;
sum(numberX, numberY);

console.log(`o número X é ${numberX}`);
console.log(`o número Y é ${numberY}`);
console.log(`a soma é ${sum(numberX, numberY)}`);
console.log(total);
