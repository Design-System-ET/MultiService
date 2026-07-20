import "bootstrap/dist/css/bootstrap.min.css";
import "/src/styles/style.css"; 
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import axios from "axios";
import { Persona } from "./entities/Persona";
import "./scripts/contacto";

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