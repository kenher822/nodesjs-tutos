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
        nombre: "code"
    },
]

router.get('/', (req, res) => {
    res.render('index', { titulo: 'pug', mensaje: 'Mitocode Pug | Kennett', personas: personas });
});

module.exports = router;