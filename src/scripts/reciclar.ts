//import de images------------------------------
import { 
    reciclajeImg} from "../scripts/images";

//import Swal
import Swal from "sweetalert2";

//clic servicios
const reciclar = document.getElementById('como_fun');
if (reciclar) {
    reciclar.addEventListener('click', () => {
        Swal.fire({
            customClass: {
                popup: "ResponsivePopup",
                htmlContainer: "swal-text-custom"  
            },
            imageUrl: reciclajeImg,
            imageAlt: "Reciclaje",
            showConfirmButton: false
        });
    });
}


//link whattsapp
const whatsappButton = document.getElementById('whatsapp-reciclar');
if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
        const phoneNumber = '+59891388175';
        const message = 'Buenas! me comunico desde la pagina de MultiService, tengo televisor/es en desuso y quisiera consultar sobre la donación de mi TV LED....'; 
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
}