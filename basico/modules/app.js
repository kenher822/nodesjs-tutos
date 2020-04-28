const os = require('os');
const fs = require('fs');

const mi = require('./mito')

// console.log(mi.subscritores);
//mi.saludar();
//console.log(mi.subs);

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

// let respuesta = mi.sumar(10, 5);
// let respuesta = mi.mostrar(10);
// console.log(respuesta);

//console.log(cpu);
//console.log(sistema);
//console.log(usuario);

// let cpu_string = JSON.stringify(cpu)
// fs.appendFile('mitocode.txt', `Información del cpu: ${cpu_string} `, function(error) {
//     if (error) {
//         console.log('Error al crear archivo');
//     }
// });

setTimeout(() => {
    console.log("Termine...")
}, 2000);