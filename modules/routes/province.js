var express = require('express');
var router = express.Router();
var service = require('../services/service').getInstance();

/* GET province italiane. */
router.get('/api/get/province', function(req, res, next) {
    let province = service.getProvince();
    let regione = req.query.regione;

    if (regione) 
        return res.json(service.getProvinceByRegione(regione));    
        
    res.json(province);
});

module.exports = router;
