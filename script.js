/* =========================================
   DV SECURITY PREMIUM V9.0
   SCRIPT.JS
   FUNCIONES INTERACTIVAS
========================================= */


/* ==============================
   MENU MOVIL
============================== */


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}


/* Cerrar menú al seleccionar opción */

document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});




/* ==============================
   ANIMACION AL HACER SCROLL
============================== */


const elementos = document.querySelectorAll(
".card-servicio, .estadistica, .imagen-galeria, .experiencia-box"
);



const mostrarElementos = ()=>{


    elementos.forEach(elemento=>{


        const posicion = elemento.getBoundingClientRect().top;


        const alturaPantalla = window.innerHeight;


        if(posicion < alturaPantalla - 80){


            elemento.classList.add("animar");


        }


    });


};



window.addEventListener(
"scroll",
mostrarElementos
);


mostrarElementos();





/* ==============================
   CONTADORES ESTADISTICAS
============================== */


const contadores = document.querySelectorAll(".numero");


contadores.forEach(contador=>{


    let inicio = 0;


    const final = parseInt(
        contador.dataset.numero
    );


    const tiempo = 2000;


    const incremento = final / (tiempo / 20);



    const actualizar = ()=>{


        inicio += incremento;


        if(inicio < final){


            contador.textContent =
            Math.floor(inicio);


            setTimeout(
                actualizar,
                20
            );


        }else{


            contador.textContent =
            final;


        }


    };



    actualizar();



});






/* ==============================
   AÑO AUTOMATICO FOOTER
============================== */


const fecha = new Date();

const año = fecha.getFullYear();


const elementoAño =
document.getElementById("year");


if(elementoAño){

    elementoAño.textContent = año;

}





/* ==============================
   EFECTO TITULO NAVEGADOR
============================== */


let tituloOriginal =
document.title;



document.addEventListener(
"visibilitychange",
()=>{


if(document.hidden){


document.title =
"🔒 DV Security - Protección Activa";


}else{


document.title =
tituloOriginal;


}



});





/* ==============================
   CARGA INICIAL
============================== */


window.addEventListener(
"load",
()=>{


document.body.classList.add("cargado");


});
