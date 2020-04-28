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
        nombre: "code"
    },
]

// Motor de plantillas PUG
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('template', { titulo: 'pug', mensaje: 'Mitocode Pug | Kennett', personas: personas });
});


app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}, con motor de plantilla pug.`)
})