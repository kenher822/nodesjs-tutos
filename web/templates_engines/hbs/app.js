const express = require('express');
const app = express();
const port = 3000;

let personas = [{
        id: 1,
        nombre: "Mitocode"
    },
    {
        id: 2,
        nombre: "Mito"
    },
    {
        id: 3,
        nombre: "Code"
    },
]

// Motor de plantillas HBS
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render(
        'template', { titulo: 'Handlebars', mensaje: 'Mitocode Handlebars | Kennett', personas: personas });
});

app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}, con motor de plantilla hbs.`);
})