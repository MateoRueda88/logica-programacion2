const btn = document.getElementById('calcular');
btn.addEventListener('click', () =>{
  convertirAF()
})

function convertirAF() {
  // Obtener el valor del input
  let gradosCelsius = document.getElementById('gradosC').value;
gradosCelsiusCelsius = parseFloat(gradosCelsius);
if(isNaN(gradosCelsiusCelsius)){
  alert("Por favor introduce un valor valido")
  
}
let f = ((gradosCelsius * 9)/5) + 32
let k = gradosCelsius + 273.5
document.getElementById('answer').textContent = `la temperatura en Fahrenheit: es ${f}`
document.getElementById('answerQ').textContent = `la temperatura en Kelvin: es ${k}`
}

