var display = document.getElementById("resultado");
operadorAnterior = false;

function inserirNumero(numero){
  if(display.innerHTML === '0'){
    display.innerHTML = numero;
  }else{
  display.innerHTML += numero;
}
operadorAnterior = false;
}
function inserirOperador(operador) {
  var ultimoCaractere = display.innerHTML.slice(-1);
  if (!operadorAnterior && !['+', '-', '*', '/'].includes(ultimoCaractere)) {
      display.innerHTML += operador;
      operadorAnterior = true; 
  }
}
function limpar(){
  document.getElementById('resultado').innerHTML = "0";
  operadorAnterior = false;
}
function calcular(){
  var resultado = document.getElementById('resultado').innerHTML;
  if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
  } else{
    document.getElementById('resultado').innerHTML = "NaN"
  }
  operadorAnterior = false;
}