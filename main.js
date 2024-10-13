const date = new Date();

let day = date.getDate();

let month= date.getMonth()+1; 

let fecha = day + "/" + month;

localStorage.setItem('bienvenida', 'Bienvenido a Delicias de Lolo, estos son los menú disponibles para el');

let mensaje = localStorage.getItem('bienvenida');

setTimeout(() => {

    alert(`${mensaje} ${fecha}`);

}, 2000);


let monto = {

    milanesa: "$9000",

    canelones: "$6750",

    albondigas: "$7000",

    tarta: "$6000",
}

const comidas = ["Milanesa a la napolitana", "Canelones de verdura con salsa rosa", "Albóndigas con puré", "Porción de tarta de zapallo"]

const guardarEnStorage = (clave, valor) => {
    localStorage.setItem(clave,valor);
}

guardarEnStorage('comidas',JSON.stringify(comidas));

let comidaAlmacenada = localStorage.getItem("comidas");

comidaAlmacenada = JSON.parse(comidaAlmacenada);

const boton = document.getElementById("pedido");

boton.addEventListener("click", function(){

    let menuIngresado = prompt("Ingresar N° de opción elegida");

    function opciones() {

        if(menuIngresado == 1){

        alert(`Su pedido de ${comidaAlmacenada[0]} fue recibido. El monto total es de ${monto.milanesa}`);

    } else if (menuIngresado ==2) {

        alert(`Su pedido de ${comidaAlmacenada[1]} fue recibido. El monto total es de ${monto.canelones}`);

    } else if (menuIngresado ==3) {

        alert(`Su pedido de ${comidaAlmacenada[2]} fue recibido. El monto total es de ${monto.albondigas}`);

    } else if (menuIngresado ==4) {

        alert(`Su pedido de ${comidaAlmacenada[3]} fue recibido. El monto total es de ${monto.tarta}`);

    } else {alert('Por favor ingrese el numero correspondiente a los menú disponibles')}

        /*      INTENTE CAMBIAR LOS ELSE IF POR ESTE SWITCH CASE PERO LA FUNCTION EN EL BOTON EVENT LISTENER ME PIDE UNA DECLARACION
    switch(menuIngresado){

        case 1:

            alert(`Su pedido de ${comidas[0]} fue recibido. El monto total es de ${monto.milanesa}`);
            
            break;

        case 2: 

            alert(`Su pedido de ${comidas[1]} fue recibido. El monto total es de ${monto.canelones}`);

            break;

        case 3:

            alert(`Su pedido de ${comidas[2]} fue recibido. El monto total es de ${monto.albondigas}`);

            break;

        case 4:

            alert(`Su pedido de ${comidas[3]} fue recibido. El monto total es de ${monto.tarta}`);
            
            break;

        default:

            alert('Por favor ingrese el numero correspondiente a los menú disponibles');
    */

    }

    opciones()

})