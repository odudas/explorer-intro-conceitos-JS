/*
  Escopo de uma função

  * subject da linha 7 tem um valor
  * o subject dentro do escopo da linha 9 tem outro valor
*/

let subject = "create video";

function createThink(subject) {
  subject = "study";
  return subject;
}

console.log(subject);
console.log(createThink(subject));
