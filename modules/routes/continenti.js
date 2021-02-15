var express = require('express');
var router = express.Router();
var service = require('../services/service').getInstance();

/* GET continenti del mondo. */
router.get('/api/get/continenti', function(req, res, next) {
    let continenti = service.getContinenti();
    res.send(continenti);
});

module.exports = router;
