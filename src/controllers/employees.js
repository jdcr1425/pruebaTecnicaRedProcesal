const _ = require('underscore');
const validator = require('validator');
const employeeRepository = require("../repository/employee");

const validateData = (body) => {

    if (!body.nombres) throw ("the name is required")
    if (!body.apellidos) throw ("the surnames are required");
    if (!body.tipoIdentificacion) throw ("the id type is required");
    if (!body.numeroIdentificacion) throw ("the id number is required");
    if (body.salarioMensual && !validator.isCurrency(body.salarioMensual.toString())) throw ("the salary amount is not valid");
    if (body.fechaIngreso && !validator.isDate(body.fechaIngreso)) throw ("the date is not valid");
    if (body.correoElectronico && !validator.isEmail(body.correoElectronico)) throw ("the email is not valid");
};

const index = async(req, res) => {
    try {
        const employees = await employeeRepository.getEmployees();

        return res.status(200).json({
            state: "ok",
            data: {
                employees
            }
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ state: "error", error })
    }


}

const createEmployee = async(req, res) => {
    try {
        //Validating body input
        validateData(req.body);

        const { numeroIdentificacion, tipoIdentificacion } = req.body;

        //Verifying existent document
        const existentDocument = await employeeRepository.getexistentDocument(numeroIdentificacion, tipoIdentificacion)

        if (Object.keys(existentDocument).length !== 0) throw ("There is already a document with this document type registered");

        const employee = await employeeRepository.save(req.body);
        return res.status(201).json({
            state: "ok",
            id: employee.insertId
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ state: "error", error });
    }

}

const updateEmployee = async(req, res) => {
    try {
        const { id } = req.params;

        //Verifying if the id exists in the db
        const idExists = await employeeRepository.getEmployee(id);

        if (Object.keys(idExists).length === 0) throw ("This employee does not exist");

        //Validating body input
        validateData(req.body);

        const body = _.pick(req.body, ['nombres', 'apellidos', 'tipoIdentificacion', 'numeroIdentificacion', 'correoElectronico', 'fechaIngreso', 'salarioMensual']);
        const updatedEmployee = await employeeRepository.updateEmployee(body, id);
        return res.status(200).json({
            ok: "ok",
            data: {
                updatedEmployee,
            }
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ state: "error", error });
    }
}



module.exports = { index, createEmployee, updateEmployee }