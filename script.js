/*==================================================
DV COMPUTADORAS V11
SCRIPT.JS
==================================================*/


/*==================================================
PRELOADER
==================================================*/

window.addEventListener("load",()=>{

    const preloader = document.getElementById("preloader");

    if(preloader){

        setTimeout(()=>{

            preloader.style.opacity="0";

            preloader.style.visibility="hidden";

        },500);

    }

});



/*==================================================
MENU MOBILE
==================================================*/

const menuToggle = document.querySelector(".menu-toggle");

const menu = document.querySelector("nav");


if(menuToggle && menu){


    menuToggle.addEventListener("click",()=>{


        menu.classList.toggle("active");


        menuToggle.classList.toggle("open");


    });


}



/*==================================================
CERRAR MENU AL HACER CLICK
==================================================*/

const menuLinks = document.querySelectorAll("nav a");


menuLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        if(menu){

            menu.classList.remove("active");

        }


    });


});



/*==================================================
BOTÓN SUBIR ARRIBA
==================================================*/

const btnTop = document.getElementById("btn-top");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){


        btnTop?.classList.add("show");


    }else{


        btnTop?.classList.remove("show");


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

const counters = document.querySelectorAll(".counter");


let started = false;



function startCounters(){


    if(started) return;


    const section = document.querySelector(".counter-section");


    if(!section) return;



    const position = section.getBoundingClientRect().top;



    if(position < window.innerHeight - 100){


        started=true;



        counters.forEach(counter=>{


            const target = +counter.dataset.target;


            let current = 0;


            const increment = target / 100;



            const updateCounter = ()=>{


                current += increment;



                if(current < target){


                    counter.textContent = Math.ceil(current);


                    requestAnimationFrame(updateCounter);


                }else{


                    counter.textContent = target;


                }


            };


            updateCounter();



        });



    }



}



window.addEventListener("scroll",startCounters);



/*==================================================
ANIMACIÓN AL HACER SCROLL
==================================================*/


const animatedElements = document.querySelectorAll(

    ".service-card, .why-card, .process-card, .gallery-item, .contact-card"

);



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},{

    threshold:.15

});



animatedElements.forEach(element=>{


    observer.observe(element);


});
