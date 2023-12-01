const btn = document.querySelector(".btn");

const calcularMoneda = function () {
  const moneda = document.querySelector(".moneda").value.toLowerCase();
  const pesos = document.querySelector(".pesos").value;
  const result = document.getElementById("result");

  let resultado;

  if (moneda === "dolar" || moneda === "dólar") {
    resultado = pesos * 56.96;
    result.textContent = `${resultado.toFixed(2)} pesos`;
  } else if (moneda === "euro") {
    resultado = pesos * 61.77;
    result.textContent = `${resultado.toFixed(2)} pesos`;
  } else if (moneda === "") {
    resultado = "Tienes campos vacíos.";
    result.textContent = resultado;
  } else {
    resultado = "Moneda no válida.";
    result.textContent = resultado;
  }
};

btn.addEventListener("click", calcularMoneda);
