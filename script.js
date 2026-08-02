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
// MENU MOVIL


const botonMenu =
document.querySelector(".menu-btn");


const menu =
document.querySelector(".menu");



botonMenu.addEventListener(
"click",
()=>{


menu.classList.toggle("active");


}
);
// ANIMACION DE CONTADORES


const contadores = document.querySelectorAll(".contador");


const iniciarContadores = () => {


contadores.forEach(contador=>{


const posicion =
contador.getBoundingClientRect().top;



if(posicion < window.innerHeight - 100){


const objetivo =
+contador.getAttribute("data-numero");


let numero = 0;



const tiempo = setInterval(()=>{


numero += Math.ceil(objetivo / 50);



if(numero >= objetivo){


numero = objetivo;

clearInterval(tiempo);


}



contador.textContent = numero + "+";


},30);



}


});


};



window.addEventListener(
"scroll",
iniciarContadores
);


iniciarContadores();
