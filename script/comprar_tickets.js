
// Seccion de variables

//evenlistener para detectar cuando hacen click en Button Resumen
let ticketsResumen = document.querySelector("#ticketsResumen");
ticketsResumen.addEventListener("click", ticketsPrice);

//evenlistener para detectar cuando hacen click en el Button Borrar
let ticketsBorrar = document.querySelector("#ticketsBorrar");
ticketsBorrar.addEventListener("click", borrarOutput);

//evenlistener para detectar cuando hacen click en el input Cantidad
let cantidadTickets = document.querySelector(".cantidadTickets");
cantidadTickets.addEventListener("click", clearInput);

//evenlistener para detectar cuando hacen click en el input Categoria
let CategoriaTickets = document.querySelector(".CategoriaTickets");
CategoriaTickets.addEventListener("click", descuento);


//eventlistener para detectar click en los div estudiante/trainee/junior
let discountStudent = document.querySelector(".estudiante");
discountStudent.addEventListener("click", updateCategory);
let discountTrainee = document.querySelector(".trainee");
discountTrainee.addEventListener("click", updateCategory);
let discountJunior = document.querySelector(".junior");
discountJunior.addEventListener("click", updateCategory);




// funcion Ticketprice
function ticketsPrice(evento) {
    console.log(evento);
    //para que no se refresque el formulario utilizamos la siguiente funcion
    evento.preventDefault();

    //leemos el valor del input cantidad
    let cantidadTickets = document.querySelector(".cantidadTickets");

    if (Number(cantidadTickets.value)) {
        let CategoriaTickets = document.querySelector(".CategoriaTickets");
        let pagoTotal;

        switch (CategoriaTickets.value) {
            case "Estudiante": {
                pagoTotal = 200 * cantidadTickets.value * 0.2;
                break;
            }
            case "Trainee": {
                pagoTotal = 200 * cantidadTickets.value * 0.5;
                break;
            }
            case "Junior": {
                pagoTotal = 200 * cantidadTickets.value * 0.85;
                break;
            }
        }

        document.querySelector(".infoTickets").textContent = `Total a pagar: $${pagoTotal}`;
        let outputNode = document.querySelector(".infoTickets");
        let spanNode = document.createElement("span");
        spanNode.className = 'comprarTickets';
        let textNode = document.createTextNode("Comprar");
        spanNode.append(textNode);
        outputNode.append(spanNode);

        //evento que sirve para detectar un click en el span comprarTickets
        let comprarTickets = document.querySelector(".comprarTickets");
        comprarTickets.addEventListener("click", ticketsSubmit);

    } else {
        document.querySelector(".cantidadTickets").style.border = "2px solid red";
        cantidadTickets.value = "";
        cantidadTickets.placeholder = "Ingrese una cantidad válida";
        alert("Ingrese una cantidad válida");
    }

}

// Funcion para borrar la salida de texto
function borrarOutput() {

    document.querySelector(".infoTickets").textContent = "Total a pagar:";

    let form = document.querySelector(".formTickets");
    for (i = 0; i < 4; i++) {
        document.querySelector("." + form[i].className).style.border = "1px solid var(--gray-300)";
    }
}


function updateCategory(evento) {

    let categoria = evento.target.parentNode.className;

    switch (categoria) {
        case "estudiante": {
            console.log("es estudiante");
            document.querySelector(".CategoriaTickets").options.selectedIndex = 0;
            document.querySelector(".estudiante").style.backgroundColor = "#f2f2f2";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "trainee": {
            console.log("es trainee");
            document.querySelector(".CategoriaTickets").options.selectedIndex = 1;
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "#f2f2f2";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "junior": {
            console.log("es junior");
            document.querySelector(".CategoriaTickets").options.selectedIndex = 2;
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "#f2f2f2";
            break;
        }
    }
}


// Funcion para obtener los datos de los tickets
function ticketsSubmit() {

    let form = document.querySelector(".formTickets");
    console.log(form);
    inputCheck(form);

    function inputCheck(form) {
        let arrayCheck = [];
        for (i = 0; i < 3; i++) {
            arrayCheck[i] = form[i].value;
            if (form[i].value == "") {
                document.querySelector("." + form[i].className).style.border = "2px solid red";
            } else {
                document.querySelector("." + form[i].className).style.border = "1px solid var(--gray-300)";
            }
        }


        if (arrayCheck.every(element => element != "")) {
            if (form[2].value.includes('@') && form[2].value.includes('.')) {
                alert("Formulario enviado");
                form.submit();
                document.querySelector("." + form[2].className).style.border = "1px solid var(--gray-300)";
            } else {
                alert("Debe ingresar un correo válido");
                document.querySelector("." + form[2].className).style.border = "2px solid red"
            }
        } else {
            alert("Completar los campos en rojo");
        }

    }
}

// Funcion limpiar (clear)
function clearInput(evento) {
    document.querySelector("." + evento.target.className).style.border = "1px solid var(--gray-300)";
}

// Funcion para Aplicar estilo (se activa al hacer click en cada una de las opciones)
function descuento(evento) {

    switch (evento.target.value) { //analiza el valor de la variable y la compara con los 3 distintos datos posibles, en este caso al tratarse de un tipo option es poco problable que el valor que reciba se salga de estos 3 valores 
        case "Estudiante": {
            document.querySelector(".estudiante").style.backgroundColor = "#f2f2f2";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "Trainee": {
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "#f2f2f2";
            document.querySelector(".junior").style.backgroundColor = "transparent";
            break;
        }
        case "Junior": {
            document.querySelector(".estudiante").style.backgroundColor = "transparent";
            document.querySelector(".trainee").style.backgroundColor = "transparent";
            document.querySelector(".junior").style.backgroundColor = "#f2f2f2";
            break;
        }
    }
}
