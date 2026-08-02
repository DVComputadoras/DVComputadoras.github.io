// DV COMPUTADORAS V8.0


console.log(
"DV Computadoras - Página cargada correctamente"
);



// Animación al desplazarse


const elementos = document.querySelectorAll(
".servicio-card, .trabajo-card, .testimonio-card"
);


const mostrar = () => {


elementos.forEach(elemento => {


const posicion = elemento.getBoundingClientRect().top;


if(posicion < window.innerHeight - 100){

elemento.style.opacity="1";

elemento.style.transform="translateY(0)";

}


});


}



elementos.forEach(elemento=>{

elemento.style.opacity="0";

elemento.style.transform="translateY(40px)";

elemento.style.transition=".6s";

});



window.addEventListener(
"scroll",
mostrar
);


mostrar();
