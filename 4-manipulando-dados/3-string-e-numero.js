// Manipulando Strings e Números

// Transformar String em Número e Número em String

let string = "123";
console.log(Number(string));

let number = 321;
console.log(String(number));

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo";
console.log(word.length);

let exampleNumber1 = 1234;
console.log(String(exampleNumber1).length);

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let exampleNumber2 = 1234.1234;
console.log(exampleNumber2.toFixed(2).replace(".", ","));

// Transformar letras minúsculas em maiúsculas. Faça o contrário também

let exampleWord1 = "Programar é muito bacana!";
console.log(exampleWord1.toUpperCase());
console.log(exampleWord1.toLocaleLowerCase());

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!";
let myArray = phrase.split(" ");
console.log(myArray);

let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore);

// Verificar se o texto contem a palavra Casa

let examplePhrase = "Moro em um apartamento";
console.log(examplePhrase.includes("Casa"));

// Criar Array com construtor

let exampleMyArray = new Array("a", "b", "c");
console.log(exampleMyArray);

// Contar elementos de um array

console.log(["x", "y", "z"].length);

// Transformar uma cadeia de caracteres em elementos de um array

let exampleWord2 = "manipulação";
console.log(Array.from(exampleWord2));
