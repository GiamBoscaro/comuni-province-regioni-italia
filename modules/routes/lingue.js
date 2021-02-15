var express = require('express');
var router = express.Router();
var service = require('../services/service').getInstance();

/* GET lingue del mondo. */
router.get('/api/get/lingue', function(req, res, next) {
    let lingue = service.getLingue();
    res.json(lingue);
});

module.exports = router;
