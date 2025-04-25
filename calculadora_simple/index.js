let valorAnterior = "";
let operacionPendiente = "";
let esperandoNuevoNumero = false;
function mostrar(numero) {
  const valor = document.getElementById("input-number");
  if (esperandoNuevoNumero) {
    valor.value = numero;
    esperandoNuevoNumero = false;
  } else {
    if (numero === "." && valor.value.includes(".")) return;
    valor.value += numero;
  }
}
function reset() {
  const valor = document.getElementById("input-number");
  if (valor.value != 0) {
    document.getElementById("input-number").value = "";
  } else {
    valorAnterior = "";
    operacionPendiente = "";
    esperandoNuevoNumero = false;
  }
}
function operacion(operador) {
  const valor = document.getElementById("input-number");
  if (valorAnterior && !esperandoNuevoNumero) {
    resultado();
  }
  valorAnterior = valor.value;
  operacionPendiente = operador;
  esperandoNuevoNumero = true;
}
function resultado() {
  const valor = document.getElementById("input-number");
  if (!valorAnterior || !operacionPendiente) return;
  const valorActual = parseFloat(valor.value.replace(",", "."));
  const num1 = parseFloat(valorAnterior.replace(",", "."));
  const num2 = valorActual;
  let total;
  switch (operacionPendiente) {
    case "+":
      total = num1 + num2;
      break;
    case "-":
      total = num1 - num2;
      break;
    case "x":
      total = num1 * num2;
      break;
    case "/":
      total = num2 !== 0 ? num1 / num2 : "Error";
      break;
    case "%":
      total = num1 % num2;
      break;
    default:
      total = "Error";
  }
  if (total === "Error") {
    valor.value = "Error";
  } else {
    valor.value = total.toLocaleString("es-ES");
    valorAnterior = total.toString();
  }
  operacionPendiente = "";
  esperandoNuevoNumero = true;
}
function borrar() {
  const input = document.getElementById("input-number");
  if (esperandoNuevoNumero) {
    input.value = "";
    esperandoNuevoNumero = false;
    return;
  }
  input.value = input.value.slice(0, -1);
}
function signo() {
  const input = document.getElementById("input-number");
  let valor = input.value;
  valor = valor.replace(",", ".");
  let numero = parseFloat(valor);
  if (isNaN(numero)) return;
  numero *= -1;
  input.value = numero.toString();
}
