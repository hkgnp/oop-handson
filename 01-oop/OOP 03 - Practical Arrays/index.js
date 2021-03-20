class Employee {
  constructor(employee_number, name, position, salary) {
    this.employee_number = employee_number; // UNIQUE across all employees
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class Company {
  constructor() {
    this.employees = [];
  }
  getNextEmployeeID() {
    let id = Math.floor(Math.random() * 1000 + 50);
    return id;
  }

  addEmployee(employee_number, name, position, salary) {
    let e = new Employee(employee_number, name, position, salary);
    return this.employees.push(e);
  }

  deleteEmployee(employeeName) {
    let arr = this.employees;
    let index = arr.findIndex((i) => i.name === employeeName);
    return arr.splice(index, 1);
  }

  updateEmployee(employee_number, newName, newPosition, newSalary) {}

  findEmployeeByName(name) {
    return this.employees.find((e) => e.name === name);
  }

  findEmployeeByEmployeeNumber(employee_number) {}
}

let prudential = new Company();

prudential.addEmployee(
  prudential.getNextEmployeeID(),
  'John Smith',
  'Executive',
  5000
);

prudential.addEmployee(
  prudential.getNextEmployeeID(),
  'Mary Smith',
  'Manager',
  1000
);

prudential.addEmployee(
  prudential.getNextEmployeeID(),
  'Larry Smith',
  'Admin',
  2000
);

let e4 = prudential.addEmployee(
  prudential.getNextEmployeeID(),
  'Tan Ah Kow',
  'Admin',
  1000
);

console.log(prudential);

prudential.deleteEmployee('Larry Smith');
console.log(prudential);
