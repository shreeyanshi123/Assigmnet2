const employeeForm = document.getElementById('employee-form');
const employeeNameInput = document.getElementById('name');
const employeeDepartmentInput = document.getElementById('department');
const employeeSalaryInput = document.getElementById('salary');
const employeeTable = document.getElementById('employee-table');

let employees = []; // Array to store employee data objects

function addEmployee(name, department, salary) {
  const newEmployee = {
    name,
    department,
    salary,
  };
  employees.push(newEmployee);

  const tableRow = document.createElement('tr');
  const nameCell = document.createElement('td');
  const departmentCell = document.createElement('td');
  const salaryCell = document.createElement('td');
  const actionsCell = document.createElement('td');
  const deleteBtn = document.createElement('button');

  nameCell.textContent = name;
  departmentCell.textContent = department;
  salaryCell.textContent = `$${salary.toFixed(2)}`; // Format salary with 2 decimal places
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', () => {
    const employeeIndex = employees.indexOf(newEmployee);
