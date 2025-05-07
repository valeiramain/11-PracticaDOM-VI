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