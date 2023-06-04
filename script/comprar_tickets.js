var botones = [];
precios = document.getElementsByClassName('precios');

for(var i=0; i<botones.length ;i++) {

   botones[i].addEventListener('click',append);
}


function append(event) {
   var elemento = document.getElementById('calctext');
   var valor = elemento.value;
   elemento.value = valor + event.srcElement.innerHTML;
}

function operacion() {
   var resultado = document.getElementById('resultado');
   var valor = document.getElementById('calctext').value;
   resultado.innerText = eval(valor);
}

const btnClick = document.getElementById('equals');
btnClick.addEventListener('click',operacion);
function operacion() {
   var valor = document.getElementById('calctext');   
   var elemento = valor.value;
   valor.value = eval(elemento);
}