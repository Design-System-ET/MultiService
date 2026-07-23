import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css"; 
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

//import axios from "axios";


//import de los otros scripts
import "./scripts/contacto";

//import de images------------------------------
import { electricidadImg, electronicaImg, proy_electronicaImg, informaticaImg, carpinteriaImg, mecanicaImg, antenasImg, herreriaImg } from "./scripts/images";

//----------------------------------------------

import Swal from "sweetalert2";

//cambia el subrrayado naranja del menu
document.querySelectorAll<HTMLAnchorElement>('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    });
});

//cerramos el menú al hacer click en un enlace (para dispositivos móviles)
const links = document.querySelectorAll<HTMLAnchorElement>('.navbar-nav .nav-link');
const menu = document.getElementById('menu');

links.forEach(link => {
    link.addEventListener('click', () => {
        if (menu?.classList.contains('show')) {
            menu.classList.remove('show');
        }
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});


//link whattsapp
const whatsappButton = document.getElementById('whatsapp-button');
if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
        const phoneNumber = '+59891388175';
        const message = 'Buenas! me comunico desde la pagina de MultiService, quisiera consultar sobre sus servicios....'; 
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
}

const whatsappButton_2 = document.getElementById('whatsapp-button_2');
if (whatsappButton_2) {
    whatsappButton_2.addEventListener('click', () => {
        const phoneNumber = '+59891388175';
        const message = 'Buenas! me comunico desde la pagina de MultiService, quisiera consultar sobre sus servicios....'; 
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
}


//clic servicios
const electricidad = document.getElementById('Electricidad');
if (electricidad) {
    electricidad.addEventListener('click', () => {
        Swal.fire({
            customClass: {
                popup: "ResponsivePopup",
                htmlContainer: "swal-text-custom"  
            },
            imageUrl: electricidadImg,
            imageAlt: "Electricidad",
            showConfirmButton: false
        });
    });
}

const electronica = document.getElementById('Electronica');
if (electronica) {
    electronica.addEventListener('click', () => {
        Swal.fire({
            
            customClass: {
                popup: "ResponsivePopup",
                htmlContainer: "swal-text-custom"  
            },
            imageUrl: electronicaImg,
            imageAlt: "Electronica",
            showConfirmButton: false
        });
    });
}

const proy_electronica = document.getElementById('Proy_electronica');
if (proy_electronica) {
    proy_electronica.addEventListener('click', () => {
        Swal.fire({
            
            customClass: {
                popup: "ResponsivePopup",
                htmlContainer: "swal-text-custom"  
            },
            imageUrl: proy_electronicaImg,
            imageAlt: "Proyectos de Electronica",
            showConfirmButton: false
        });
    });
}

const informatica = document.getElementById('Informatica');
if (informatica) {
    informatica.addEventListener('click', () => {
        Swal.fire({
            
            customClass: {
                popup: "ResponsivePopup",
                htmlContainer: "swal-text-custom"  
            },
            imageUrl: informaticaImg,
            imageAlt: "Informatica",
            showConfirmButton: false
        });
    });
}

const carpinteria = document.getElementById('Carpinteria');
if (carpinteria) {
    carpinteria.addEventListener('click', () => {
        Swal.fire({
            
            customClass: {
                popup: "ResponsivePopup",
                htmlContainer: "swal-text-custom"  
            },
            imageUrl: carpinteriaImg,
            imageAlt: "Carpinteria",
            showConfirmButton: false
        });
    });
}

const mecanica = document.getElementById('Mecanica');
if (mecanica) {
    mecanica.addEventListener('click', () => {
        Swal.fire({
            
            customClass: {
                popup: "ResponsivePopup",
                htmlContainer: "swal-text-custom"  
            },
            imageUrl: mecanicaImg,
            imageAlt: "Mecanica",
            showConfirmButton: false
        });
    });
}

const antenas = document.getElementById('Antenas');
if (antenas) {
    antenas.addEventListener('click', () => {
        Swal.fire({
            
            customClass: {
                popup: "ResponsivePopup",
                htmlContainer: "swal-text-custom"  
            },
            imageUrl: antenasImg,
            imageAlt: "Antenas",
            showConfirmButton: false
        });
    });
}

const herreria = document.getElementById('Herreria');
if (herreria) {
    herreria.addEventListener('click', () => {
        Swal.fire({
            
            customClass: {
                popup: "ResponsivePopup",
                htmlContainer: "swal-text-custom"  
            },
            imageUrl: herreriaImg,
            imageAlt: "Herreria",
            showConfirmButton: false
        });
    });
}