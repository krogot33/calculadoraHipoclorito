const calcularDosisHipoclorito = (concentracionCloroDeseada, flujo) => {
  // Convertir la concentración de cloro deseada a mg/L
  const concentracionCloroDeseadaMgL = concentracionCloroDeseada;

  // Convertir el flujo a mL/s
  const flujoMLs = flujo * 1000;

  // Calcular la dosis de hipoclorito en mL/min
  const dosisHipocloritoMLmin = (concentracionCloroDeseadaMgL * flujoMLs) / 10000;

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
  resultado.innerHTML = `Dosis de hipoclorito: ${dosisHipocloritoMLmin} mL/min`;
});
