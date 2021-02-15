var express = require('express');
var router = express.Router();
var service = require('../services/service').getInstance();

/* GET regioni italiane. */
router.get('/api/get/regioni', function(req, res, next) {
    let regioni = service.getRegioni();
    res.json(regioni);
});

module.exports = router;
