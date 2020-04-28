let mensaje = "Debugueando Coder!"

function saludar() {
    debugger;
    console.log(mensaje);
}

module.exports = {
    saludar: saludar
}