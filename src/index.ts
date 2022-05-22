/*
Promedio-Máximo-Mínimo
• Diseñar un algoritmo que
lea números enteros hasta
teclear 0
• Determinar y mostrar el
máximo, el mínimo y la
media de todos los
numeros ingresados
• Pensar cuidadosamente
como debemos inicializar
las variables*/


let ingresados: boolean = false;
let nro = Number(prompt("Ingrese un número"));
let maximo: number = nro;
let minimo: number = nro;
let media : number = 0;
let total : number = 0;
let contador : number = 0;

while (nro !== 0) {
  ingresados = true;
  if (nro > maximo) {
    maximo = nro;
  }if (nro < minimo) { 
    minimo = nro;
  }
  total= total + nro;
  contador++;
  nro = Number(prompt("Ingrese un número"));
  }
  if (contador > 0 ){
  media = total/contador;
  }

}
if (ingresados) {
  console.log("El número máximo es "+ maximo);
  console.log ("El número mínimo es " + minimo);
  console.log ("El promedio es " + media);
}