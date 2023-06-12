/*
  Callback Function

  * Chamar uma função e chamar outra função devolta
  * É uma função como parâmetro para outra função
*/

function sayMyName(name) {
  console.log("Antes de executar a função callback");
  name();
  console.log("Depois de executar a função callback");
}

sayMyName(() => {
  console.log("Estou em uma callback");
});
