const _ = require('underscore');
const validator = require('validator');
const telephoneRepository = require("../repository/telephone");
const employeeRepository = require("../repository/employee");

const validateData = (body) => {

    if (!body.tipo) throw ("the type is required")
    if (!validator.equals(body.tipo, 'cell') && !validator.equals(body.tipo, 'tel')) throw ("the type is not valid");
    if (!body.numero) throw ("the number is required");
    if (body.indicativo && !validator.isNumeric(body.indicativo)) throw ("the indicative is not valid");
    if (!body.personaId) throw ("the id employee is required");
    if (!validator.isNumeric(body.personaId.toString())) throw ("the id employee is not valid");
};

const index = async(req, res) => {
    try {
        const { id_employee } = req.params;
        const phones = await telephoneRepository.getTelephones(id_employee);
        return res.status(200).json({
            state: "ok",
            data: {
                phones
            }
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ state: "error", error })
    }
}

const createTelephone = async(req, res) => {
    try {
        //Validating body input
        validateData(req.body);

        const { personaId, tipo, numero, indicativo } = req.body

        //Verifying if the employee exist
        const existsEmployee = await employeeRepository.getEmployee(personaId);

        if (Object.keys(existsEmployee).length === 0) throw ("The employee does not exist");

        //Verify if the same phone is not registered
        const existentPhone = await telephoneRepository.existentPhone(tipo, personaId, numero, indicativo);

        if (Object.keys(existentPhone).length !== 0) throw ("The number is already registered");


        await telephoneRepository.save(req.body);
        return res.status(201).json({
            state: "ok",
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ state: "error", error });
    }
}

const deleteTelephone = async(req, res) => {
    try {
        const { id } = req.params;
        await telephoneRepository.deleteTel(id);
        return res.status(201).json({
            state: "ok",
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ state: "error", error });
    }
}





module.exports = { index, createTelephone, deleteTelephone }