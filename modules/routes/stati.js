var express = require('express');
var router = express.Router();
var service = require('../services/service').getInstance();

/* GET stati del mondo. */
router.get('/api/get/stati', function(req, res, next) {
    let stati = service.getStati();
    res.send(stati);
});

module.exports = router;
