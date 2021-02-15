var express = require('express');
var router = express.Router();
var service = require('../services/service').getInstance();

/* GET comuni italiani. */
router.get('/api/get/comuni', function(req, res, next) {
    let comuni = service.getComuni();
    res.send(comuni);
});

module.exports = router;
