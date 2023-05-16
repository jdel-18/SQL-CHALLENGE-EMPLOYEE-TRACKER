const fs = require('fs');
const inquirer = require('inquirer');
const mysql2 = require('mysql2');


function startApp() {
    inquirer
      .prompt([
        {
          name: 'action',
          type: 'list',
          message: 'What would you like to do?',
          choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit',
          ],
        },
      ])
      .then((answer) => {
        switch (answer.action) {
          case 'View all departments':
            viewDepartments();
            break;
          case 'View all roles':
            viewRoles();
            break;
          case 'View all employees':
            viewEmployees();
            break;
          case 'Add a department':
            addDepartment();
            break;
          case 'Add a role':
            addRole();
            break;
          case 'Add an employee':
            addEmployee();
            break;
          case 'Update an employee role':
            updateEmployeeRole();
            break;
          case 'Exit':
            console.log('Goodbye!');
            connection.end();
            break;
        }
      });
  }
  
  function viewDepartments() {
    connection.query('SELECT * FROM departments', (err, res) => {
      if (err) throw err;
      console.log('\n');
      console.table(res);
      startApp();
    });
  }
  
  function viewRoles() {
    const query = `
    SELECT roles.id, roles.title, departments.name AS department, roles.salary
    FROM roles
    INNER JOIN departments ON roles.department_id = departments.id
    `;
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.log('\n');
      console.table(res);
      startApp();
    });
  }
  
  function viewEmployees() {
    const query = `
    SELECT employees.id, employees.first_name, employees.last_name,
      roles.title, departments.name AS department, roles.salary,
      CONCAT(managers.first_name, ' ', managers.last_name) AS manager
    FROM employees
    INNER JOIN roles ON employees.role_id = roles.id
    INNER JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employees AS managers ON employees.manager_id = managers.id
    `;
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.log('\n');
      console.table(res);
      startApp();
    });
  }
  
  function addDepartment() {
    inquirer
      .prompt([
        {
          name: 'departmentName',
          type: 'input',
          message: 'Enter the name of the department:',
          validate: function (input) {
            if (input.trim() === '') {
              return 'Department name cannot be empty.';
            }
            return true;
          },
        },
      ])
      .then((answer) => {
        const departmentName = answer.departmentName;
  
        connection.query(
          'INSERT INTO departments (name) VALUES (?)',
          [departmentName],
          (err, res) => {
            if (err) throw err;
            console.log(`Department '${departmentName}' added successfully!\n`);
            startApp();
          }
        );
      });
  }