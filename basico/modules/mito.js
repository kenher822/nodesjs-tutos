// console.log('Subscribete al canal...')

//console.log(module);

let subscritores = 22000;

// module.exports.saludar = function saludar() {
//     console.log('Subscribete al canal CODER');
// };

// module.exports.subs = subscritores;

module.exports = {
    subs: subscritores,
    saludar: () => {
        console.log('Hola Coder');
    },
    sumar: (a, b) => a + b,
    mostrar: a => a + 10

}