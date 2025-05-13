// ** CARD 1 **
// primera card: Modificar un titulo al  hacer click en el boton "Cambiar titulo"
function modificarTitulo() {
    console.log('desde la funcion modificar titulo')

    //1) desde JS obtener el titulo a modificar por el id, clase o etiqueta,
    // en este caso devuelve un "objeto" etiqueta h5, si no encuentra devuelve "null"
    const titulo = document.getElementById('titulo')
    console.log(titulo)

    //2) Modificar el contenido el texto. Accedo al objeto con la propiedad textContent
    // no puedo insertar etiquetas HTML
    titulo.textContent = 'Nuevo titulo desde JS'

    //3) Agregar una clase, cambiar el estilo CSS con classlist
    titulo.classList.add('display-6')
    console.log(titulo)
}

// funcionalidad en el boton cambiar titulo con innerHTML
//SI SE PUEDE EVITAR ES MEJOR
function modificarTituloConInnerHTML() {
    console.log('desde la funcion function modificarTituloConInnerHTML')
    // buscar elemento que tiene el id titulo
    const titulo = document.getElementById('titulo')
    // modificar titulo: mejor con textContent
    // innerHTML: insert una porion de HTML (conviene no usarla). Se pueden insertar etiquetas HTML. en textContent NO
    titulo.innerHTML = 'texto usando <b>innerHTML</b>'
}
// ** FIN CARD 1 **


// **** CARD 2 ****
function ocultarTexto() {
    console.log('desde ocultar texto')

    //1) buscar el elemento a ocultar el titulo h5 y cambiar la clase a d-none
    // className devuelve un array. titulos sera un array
    const titulos = document.getElementsByClassName('card-title')
    console.log(titulos)
    console.log(titulos[1])

    //2) buscar el elemento del button y cambiar el nombre. Busco por nombre etiqueta
    // className devuelve un array. titulos sera un array
    const botones = document.getElementsByTagName('button')
    console.log(botones)
    console.log(botones[4])

    //3) ocultar o mostrar el titulo y cambiar texto
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
// **** FIN CARD 2 ****

// **** CARD 3 ****
function eliminarTitulo() {
    console.log('aqui elimino el titulo')
    const titulo = document.getElementById('tituloEliminar')
    //titulo es un objeto, si existe se borra
    console.log(titulo)
    // if (null) => False
    if (titulo) {
        titulo.remove()
        btnEliminar.classList.add('disabled')
    }
}
//**** FIN CARD 3 ****

//**** CARD 4 ****

//e = objeto event de js (objeto event)
// simepre que se trabaja con formularios se usa e para que le de tiempo a la funcion para ejecutar su logica
function mostrarNombre(e) {
    e.preventDefault(); //evitar que recargue la pagina
    console.log('aqui deberia tomar el valor del input y mostrarlo')

    //1) buscar el texto escrito en el input
    const parrafoACompletar = document.getElementById('parrafoNombre')
    const inputNombre = document.querySelector('input') // Se puede tambien acceder al input con formulario.children[0].children[1]
    console.log(parrafoACompletar)
    console.log(inputNombre)
    console.log(inputNombre.value) // accede al texto del input. OBJETO.VALUE

    // 2) mostrar el texto escrito en el formulario
    // parrafoACompletar.textContent = parrafoACompletar.textContent + ' '+inputNombre.value
    parrafoACompletar.textContent += inputNombre.value
}

//** fin card 4 */

//**** CAMBIAR THEME DEL BOTON DEL NAVBAR */
function cambiarTheme() {
    // la prop documentElement hace referencia al root
    const html = document.documentElement;
    console.log(html.getAttribute('data-bs-theme'))

    // los atributos data-bs son de bootstrap
    const themeActual = html.getAttribute('data-bs-theme')
    //operador ternario (condicion logica) ? si es true : si es false
    //se usa set Attribute para cambiar

    html.setAttribute('data-bs-theme', themeActual === 'dark' ? 'light' : 'dark')

    // btnCambiarTheme es para cambiar el color del boton
    // className me permite leer la etiqueta class, pero como sobresscribe, hay que escribir todo lo que quiero, no solo lo que agrego

    themeActual === 'dark' ? btnCambiarTheme.className = ' btn btn-outline-dark' : btnCambiarTheme.className = ' btn btn-outline-light'
}




//====================== LOGICA ====================
//ver metodo toggle para el ejercicio agregar o borrar si la clase esta o no

// get id: 1 solo elemento
// getElementby: devuelve array
//querySelector: espera que le pase como argumentto un selector de CSS. trae solo el primer elemento
//===================================================

// **** CARD 1 ****
//1) BOTON "CAMBIAR TITULO CON innerHTML": Apenas cargue JS necesito agregarle el evento click del boton
// busca suelto el boton con el el objeto document con get elementbyid o querySelector(usa #id)
// getElementById('id')
// querySelector('#id´)
// querySelector('.clase´)
// querySelector('etiqueta´)
// querySelectorAll: trae un array de objetos
// si no lo encuentra da numm

const btnCambiarTitulo = document.querySelector('#btnCambiarTituloInnerHTML')
console.log(btnCambiarTitulo)

// 2) agregar un manejador de eventos
//Borrar titulo
//agregar un manejador de eventos: addEventListener('evento' sin on,funcion sin parentesis)
btnCambiarTitulo.addEventListener('click', modificarTituloConInnerHTML)
// **** fin card 1 ****


// **** CARD 3 ****
// Se puede usar query Selector o getElementById, para devolver el objeto boton
const btnEliminar = document.getElementById('btnEliminar')
console.log(btnEliminar)
//agregar un manejador de eventos: addEventListener('evento' sin on,funcion sin parentesis)
btnEliminar.addEventListener('click', eliminarTitulo)


// **** CARD 4 ****
//la variable "formulario" toma la etiqueta form
const formulario = document.querySelector('form')
console.log(formulario)
formulario.addEventListener('submit', mostrarNombre)
