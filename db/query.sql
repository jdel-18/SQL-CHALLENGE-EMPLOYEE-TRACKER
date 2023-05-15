SELECT
  employees.id,
  employees.first_name,
  employees.last_name,
  roles.title AS job_title,
  departments.name AS department,
  roles.salary,
  CONCAT(managers.first_name, ' ', managers.last_name) AS manager
FROM
  employees
JOIN
  roles ON employees.role_id = roles.id
JOIN
  departments ON roles.department_id = departments.id
LEFT JOIN
  employees AS managers ON employees.manager_id = managers.id;