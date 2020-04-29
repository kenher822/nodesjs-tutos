var express = require('express');
var router = express.Router();

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


router.get('/', (req, res) => {
    res.render(
        'index', { titulo: 'Handlebars', mensaje: 'Mitocode Handlebars | Kennett', personas: personas });
});


module.exports = router;