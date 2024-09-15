alert("Bienvenido a Delicias de Lolo, estos son los menú disponibles para el día de hoy: \n Opción 1: Milanesa a la napolitana \n Opción 2:Canelones de verdura con salsa rosa \n Opción 3: Albóndigas con puré \n Opción 4: Porción de tarta de zapallo");
// ¿Es correcto hacer un alert tan largo?

let menuIngresado = prompt("Ingresar N° de opción elegida");


let monto = {
    milanesa: "$9000",
    canelones: "$6750",
    albondigas: "$7000",
    tarta: "$6000",
}

const pedido = "Su pedido fue recibido. El monto total es de";

if(menuIngresado == 1){
    alert(`${pedido} ${monto.milanesa}`);
} else if (menuIngresado ==2) {
    alert(`${pedido} ${monto.canelones}`);
} else if (menuIngresado ==3) {
    alert(`${pedido} ${monto.albondigas}`);
} else if (menuIngresado ==4) {
    alert(`${pedido} ${monto.tarta}`);
}
// No se si sería mejor cambiarlo por un switch a este if else anidado

/* Debería ponerle un timeout (no se si está permitido) al alert y al prompt para que llegue a cargar el html y css primero, ya que mientras se ejecutan ambas, de fondo se ve todo blanco y no llega a cargar ni el texto. Si existe otra solución agradecería corrección/consejo sobre eso. También quería incluir un ciclo con while para que el prompt siga apareciendo hasta que se pida una de las opciones de la N° 1 a la 4 pero durante el intento se rompió*/