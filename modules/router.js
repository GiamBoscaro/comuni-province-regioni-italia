/** ROUTER
    Modulo che gestisce tutte le possibili path delle API 
**/

const express = require('express');
const router = new express.Router();

// #### ITALIA ####
router.use(require("./routes/comuni"))
router.use(require("./routes/province"))
router.use(require("./routes/regioni"))
// #### MONDO ####
router.use(require("./routes/stati"))
router.use(require("./routes/continenti"))
// #### LINGUE ####
router.use(require("./routes/lingue"))

module.exports = router;