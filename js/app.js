function modificarTitulo(){
    console.log('desde la funcion modificar titulo')

    //obtener el titulo por el id
    const titulo = document.getElementById('titulo')
    //devuelve la etiqueta <h5>, si no encuentra devuelve null

    titulo.textContent ='Nuevo titulo desde JS'
    titulo.classList.add('display-6')
    console.log(titulo)

    // modificar el texto
}

function modificarTituloConInnerHTML(){
    console.log('desde la funcion function modificarTituloConInnerHTML')
    const titulo = document.getElementById('titulo')
    titulo.innerHTML = 'texto usando <b>innerHTML</b>'
}

const btnCambiarTitulo = document.querySelector('#btnCambiarTituloInnerHTML')
console.log(btnCambiarTitulo)

//agregar un manejador de eventos
btnCambiarTitulo.addEventListener('click',modificarTituloConInnerHTML)