const calcularDosisHipoclorito = (concentracionCloroDeseada, flujo, concentracionHipoclorito) => {
  // Convertir la concentración de cloro deseada a mg/L
  const concentracionCloroDeseadaMgL = concentracionCloroDeseada * 1000;

  // Convertir el flujo a mL/s
  const flujoMLs = flujo * 1000;

  // Calcular la dosis de hipoclorito en mL/min
  const dosisHipocloritoMLmin = (concentracionCloroDeseadaMgL * flujoMLs) / concentracionHipoclorito;

  return dosisHipocloritoMLmin;
};

const formulario = document.getElementById("calculadora");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener los valores de los inputs
  const concentracionCloroDeseada = parseFloat(document.getElementById("concentracion-cloro").value);
  const flujo = parseFloat(document.getElementById("flujo").value);
  const concentracionHipoclorito = parseFloat(document.getElementById("concentracion-hipoclorito").value);

  // Calcular la dosis de hipoclorito
  const dosisHipocloritoMLmin = calcularDosisHipoclorito(concentracionCloroDeseada, flujo, concentracionHipoclorito);

  // Mostrar el resultado
  resultado.innerHTML = `Dosis de hipoclorito: ${dosisHipocloritoMLmin} mL/min`;
});
