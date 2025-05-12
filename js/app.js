function modificarTitulo() {
    console.log('desde la funcion modificar titulo')

    //obtener el titulo por el id
    const titulo = document.getElementById('titulo')
    //devuelve la etiqueta <h5>, si no encuentra devuelve null

    titulo.textContent = 'Nuevo titulo desde JS'
    titulo.classList.add('display-6')
    console.log(titulo)

    // modificar el texto
}

function modificarTituloConInnerHTML() {
    console.log('desde la funcion function modificarTituloConInnerHTML')
    const titulo = document.getElementById('titulo')
    titulo.innerHTML = 'texto usando <b>innerHTML</b>'
}


function ocultarTexto() {
    console.log('desde ocultar texto')
    // buscar el titulo h5 de la card
    const titulos = document.getElementsByClassName('card-title')
    const botones = document.getElementsByTagName('button')
    console.log(titulos)
    console.log(titulos[1])
    console.log(botones)
    console.log(botones[4])
    if (botones[4].textContent === 'Ocultar Texto') {
        //ocultar el titulo
        titulos[1].classList.add('d-none')
        //cambiar texto boton a "mostrar texto"
        botones[4].textContent = 'Mostrar Texto'
    } else {
        //ocultar el titulo
        titulos[1].classList.remove('d-none')
        //cambiar texto boton a "mostrar texto"
        botones[4].textContent = 'Ocultar Texto'
    }
}

function eliminarTitulo(){
    const titulo = document.getElementById('tituloEliminar')
    console.log(titulo)
    // if (null) => False
    if (titulo){
        titulo.remove()
        btnEliminar.classList.add('disabled')
    }
}


//====================== LOGICA ====================
//ver metodo toggle para el ejercicio agregar o borrar si la clase esta o no

// get id: 1 solo elemento
// getElementby: devuelve array
//querySelector: espera que le pase como argumentto un selector de CSS. trae solo el primer elemento

//Ocultar titulo y cambiar nombre boton
const btnCambiarTitulo = document.querySelector('#btnCambiarTituloInnerHTML')
console.log(btnCambiarTitulo)

//Borrar titulo
const btnEliminar = document.getElementById('btnEliminar')
console.log(btnEliminar)

//querySelectorAll: trae un array de objetos

//agregar un manejador de eventos
btnCambiarTitulo.addEventListener('click', modificarTituloConInnerHTML)
btnEliminar.addEventListener('click',eliminarTitulo)