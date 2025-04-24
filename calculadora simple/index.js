let valorActual = 0;
let operacionPendiente = 0;
let valorAnterior = 0;
function escribe(numero) {
    const input = document.getElementById("input-number");
    let valor= Number(input.value)
  valor += numero;
  input.value=valor
}
function reset() {
  document.getElementById("input-number").value = 0;
  valorActual = 0;
  operacionPendiente = 0;
  valorAnterior = 0;
}
function operacion(operacion) {
  const input = document.getElementById("input-number");
  valorAnterior = input.value;
  operacionPendiente = operacion;
  input.value = "";
}
function resultado() {
  const input = document.getElementById("input-number");
  valorActual = input.value;
  const num1 = parseFloat(valorAnterior);
  const num2 = parseFloat(valorActual);
  let total = 0;
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
  input.value = total;
  valorActual = 0;
  valorAnterior = 0;
  operacionPendiente = 0;
}
