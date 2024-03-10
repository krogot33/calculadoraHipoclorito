const calcularDosisHipoclorito = (concentracionCloroDeseada, flujo) => {
  // Convertir la concentración de cloro deseada a mg/L
  const concentracionCloroDeseadaMgL = concentracionCloroDeseada;

  // flujo en l/s
  const flujoMLs = flujo;

  // Calcular la dosis de hipoclorito en mL/min
  const dosisHipocloritoMLmin = Math.round(concentracionCloroDeseadaMgL * flujoMLs/9800*60*1000);

  return dosisHipocloritoMLmin;
};

const formulario = document.getElementById("calculadora");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener los valores de los inputs
  const concentracionCloroDeseada = parseFloat(document.getElementById("concentracion-cloro").value);
  const flujo = parseFloat(document.getElementById("flujo").value);
 

  // Calcular la dosis de hipoclorito
  const dosisHipocloritoMLmin = calcularDosisHipoclorito(concentracionCloroDeseada, flujo);

  // Mostrar el resultado
  resultado.innerHTML = `Tasa de hipoclorito: ${dosisHipocloritoMLmin} mL/min`;
});
