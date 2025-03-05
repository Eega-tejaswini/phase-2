let employees = require("../data/employees");

exports.getEmployees = (req, res) => res.json(employees);

exports.getEmployeeById = (req, res) => {
    const employee = employees.find(emp => emp.id == req.params.id);
    employee ? res.json(employee) : res.status(404).json({ message: "Employee not found" });
};

exports.addEmployee = (req, res) => {
    const newEmployee = { id: employees.length + 1, ...req.body };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
};

exports.updateEmployee = (req, res) => {
    let employee = employees.find(emp => emp.id == req.params.id);
    if (employee) {
        Object.assign(employee, req.body);
        res.json(employee);
    } else {
        res.status(404).json({ message: "Employee not found" });
    }
};

exports.deleteEmployee = (req, res) => {
    employees = employees.filter(emp => emp.id != req.params.id);
    res.json({ message: "Employee deleted" });
};
