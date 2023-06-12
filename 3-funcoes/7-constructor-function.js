/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
  
  É como se fosse um modelo para criar objetos
*/

function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " está andando";
  };
}

const Eduardo = new Person("Eduardo Tavares");
const Bruno = new Person("Bruno Tavares");
console.log(Eduardo);
console.log(Bruno);
