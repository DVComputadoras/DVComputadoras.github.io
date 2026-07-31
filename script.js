document.addEventListener("DOMContentLoaded", function(){



/* ANIMACIÓN AL HACER SCROLL */


const elementos = document.querySelectorAll(
".card, .titulo, .contenido, .galeria img"
);



const mostrarElemento = () => {


elementos.forEach(elemento => {


const posicion = elemento.getBoundingClientRect().top;


const alturaPantalla = window.innerHeight;



if(posicion < alturaPantalla - 100){


elemento.classList.add("mostrar");


}


});


};



window.addEventListener(
"scroll",
mostrarElemento
);


mostrarElemento();






/* EFECTO EN EL MENU AL BAJAR */


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


header.style.background="rgba(0,0,0,0.95)";


}else{


header.style.background="transparent";


}


});






/* BOTON WHATSAPP ANIMADO */


const whatsapp = document.querySelector(".whatsapp");


if(whatsapp){


setInterval(()=>{


whatsapp.style.transform="scale(1.05)";


setTimeout(()=>{


whatsapp.style.transform="scale(1)";


},400);



},2000);



}



});
