/*
* Ejercicio reutilización de código
* Bloques de código repetidos
* Desarrollado por jlquichimbo
*/

function recorrerNumeros() {
  let maximo, suma;

  // Calcula la suma de los 5 primeros enteros
  maximo = 5
  suma = 0
  for (let i = 1; i <= maximo; i++) {
    console.log(i);
    suma += i
  }
  console.log(`La suma es ${suma}`);

  // Calcula la suma de los 7 primeros enteros
  maximo = 7
  suma = 0
  for (let i = 1; i <= maximo; i++) {
    console.log(i);
    suma += i
  }
  console.log(`La suma es ${suma}`);
  
}
