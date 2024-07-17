var lupa = document.querySelector(".principal__lupa__icon");
var logoEncabezado = document.querySelector(".encabezado__principal__logo.logo__aluraGeek");
var botonLogin = document.querySelector(".encabezado__principal__boton");
var barraBusqueda = document.querySelector(".encabezado__principal__entrada");

lupa.addEventListener("click", function(){
    logoEncabezado.classList.toggle("ocultarElemento");
    botonLogin.classList.toggle("ocultarElemento");
    barraBusqueda.classList.toggle("mostrarElemento");
    console.log("click en lupa");
})