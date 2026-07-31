// ESPERA A QUE CARGUE TODA LA PÁGINA

document.addEventListener("DOMContentLoaded", function(){


    // ANIMACIÓN SUAVE AL HACER SCROLL

    const enlaces = document.querySelectorAll("nav a");


    enlaces.forEach(enlace => {


        enlace.addEventListener("click", function(e){


            const destino = document.querySelector(
                this.getAttribute("href")
            );


            if(destino){

                e.preventDefault();


                destino.scrollIntoView({

                    behavior:"smooth"

                });

            }


        });


    });



    // EFECTO DE APARICIÓN DE ELEMENTOS

    const elementos = document.querySelectorAll(
        ".tarjeta, .experiencia-box, .imagen"
    );


    const observador = new IntersectionObserver(

        entradas => {


            entradas.forEach(entrada => {


                if(entrada.isIntersecting){


                    entrada.target.style.opacity="1";

                    entrada.target.style.transform="translateY(0)";


                }


            });


        },

        {

            threshold:0.15

        }

    );



    elementos.forEach(elemento=>{


        elemento.style.opacity="0";

        elemento.style.transform="translateY(40px)";

        elemento.style.transition="all 0.6s ease";


        observador.observe(elemento);


    });



});
