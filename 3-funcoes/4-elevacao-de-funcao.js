/*
  Elevação de uma função

  * por debaixo dos panos o JS eleva a função para poder executá-la
  - Com funções declaradas

  * já ao utilizar uma const, var ou let, o JS não eleva a função
  - Com expressões de função
*/

sayMyName();

function sayMyName() {
  console.log("Eduardo");
}

noHoisting();

const noHoisting = function () {
  console.log("Edu");
};
