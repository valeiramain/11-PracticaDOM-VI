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

const btnCambiarTitulo = document.querySelector('#btnCambiarTituloInnerHTML')
console.log(btnCambiarTitulo)

//agregar un manejador de eventos
btnCambiarTitulo.addEventListener('click', modificarTituloConInnerHTML)