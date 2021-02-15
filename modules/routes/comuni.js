var express = require('express');
var router = express.Router();
var service = require('../services/service').getInstance();

/* GET comuni italiani. */
router.get('/api/get/comuni', function(req, res, next) {    
    let comuni = service.getComuni();
    let sigla = req.query.sigla;
    let provincia = req.query.provincia;
    if (sigla) 
        return res.json(service.getComuniBySiglaProvincia(sigla));

    if (provincia) 
        return res.json(service.getComuniByProvincia(provincia));    

    return res.json(comuni);
});

module.exports = router;
