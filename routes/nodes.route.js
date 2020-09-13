const express                = require('express');
const router                 = express.Router();
const nodeController         = require('../controllers/node.controller')

router.get('/nodes', nodeController.getAll)

module.exports = router;