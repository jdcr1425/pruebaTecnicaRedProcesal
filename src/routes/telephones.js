const express = require('express')
const router = express.Router();
const telephoneController = require("../controllers/telephones");

router.get('/telephones/:id_employee', telephoneController.index);
router.post("/telephones", telephoneController.createTelephone);
router.delete("/telephones/:id", telephoneController.deleteTelephone);

module.exports = router;