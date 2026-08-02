/*==================================================
DV COMPUTADORAS V10 PRO
SCRIPT.JS
==================================================*/


//======================================
// MENÚ MÓVIL
//======================================

const btnMenu = document.querySelector(".btn-menu");

const menu = document.querySelector(".menu");


if(btnMenu){

    btnMenu.addEventListener("click",()=>{

        menu.classList.toggle("active");

    });

}



// Cerrar menú al seleccionar una opción

const enlacesMenu = document.querySelectorAll(".menu a");


enlacesMenu.forEach(enlace=>{


    enlace.addEventListener("click",()=>{


        menu.classList.remove("active");


    });


});




//======================================
// BOTÓN SUBIR ARRIBA
//======================================


const btnTop = document.getElementById("btnTop");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){


        btnTop.style.display="flex";


    }else{


        btnTop.style.display="none";


    }


});



if(btnTop){


    btnTop.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}
/*==================================================
CONTADORES ANIMADOS
==================================================*/


const contadores = document.querySelectorAll(".numero");


let iniciado = false;



function iniciarContadores(){


    contadores.forEach(contador=>{


        const objetivo = parseInt(contador.dataset.numero);


        let actual = 0;


        const incremento = Math.ceil(objetivo / 100);



        const animacion = setInterval(()=>{


            actual += incremento;


            if(actual >= objetivo){


                contador.textContent = objetivo + "+";


                clearInterval(animacion);


            }else{


                contador.textContent = actual + "+";


            }



        },20);



    });


}




window.addEventListener("scroll",()=>{


    const seccionEstadistica = document.querySelector(".estadisticas");


    if(seccionEstadistica){


        const posicion = seccionEstadistica.getBoundingClientRect().top;


        if(posicion < window.innerHeight - 100 && !iniciado){


            iniciarContadores();


            iniciado=true;


        }


    }


});






/*==================================================
ANIMACIÓN ELEMENTOS AL SCROLL
==================================================*/


const elementosAnimar = document.querySelectorAll(
".servicio-card, .paso, .foto, .testimonio, .faq-item, .dato"
);



const observador = new IntersectionObserver((elementos)=>{


    elementos.forEach(elemento=>{


        if(elemento.isIntersecting){


            elemento.target.classList.add("mostrar");


        }


    });



},{


    threshold:0.15


});



elementosAnimar.forEach(elemento=>{


    elemento.classList.add("oculto");


    observador.observe(elemento);


});
/* ANIMACIONES JAVASCRIPT */

.oculto{

    opacity:0;

    transform:translateY(40px);

}



.mostrar{

    opacity:1;

    transform:translateY(0);

    transition:.8s ease;

}
/*==================================================
VALIDACIÓN DE FORMULARIO
==================================================*/


const formulario = document.querySelector(".formulario form");


if(formulario){


    formulario.addEventListener("submit",(e)=>{


        e.preventDefault();



        const nombre = formulario.querySelector(
        'input[placeholder="Nombre"]'
        ).value;



        const mensaje = formulario.querySelector(
        "textarea"
        ).value;



        if(nombre === "" || mensaje === ""){


            alert(
            "Por favor completa los campos requeridos."
            );


            return;


        }



        alert(
        "Gracias " + nombre +
        ". Tu mensaje fue preparado correctamente."
        );



        formulario.reset();



    });



}





/*==================================================
AÑO AUTOMÁTICO FOOTER
==================================================*/


const fecha = new Date();

const año = fecha.getFullYear();


const copyright = document.querySelector(".footer-copy");


if(copyright){


    copyright.innerHTML =
    "© " + año +
    " DV Computadoras | Todos los derechos reservados.";


}






/*==================================================
CARGA SUAVE DE IMÁGENES
==================================================*/


const imagenes = document.querySelectorAll("img");


imagenes.forEach(imagen=>{


    imagen.addEventListener("load",()=>{


        imagen.classList.add("cargada");


    });


});
