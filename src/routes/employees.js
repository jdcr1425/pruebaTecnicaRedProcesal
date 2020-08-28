const express = require('express')
const router = express.Router();
const employeeController = require("../controllers/employees");

router.get('/employees', employeeController.index);
router.get('/employees/:id', employeeController.one);
router.post("/employees", employeeController.createEmployee);
router.put("/employees/:id", employeeController.updateEmployee);

module.exports = router;