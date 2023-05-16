INSERT INTO departments (id, name)
VALUES (1, 'Sales'),
       (2, 'Marketing'),
       (3, 'Finance'),
       (4, 'Accounting'),
       (5, 'Engineering'),
       (6, 'Strategy');

INSERT INTO roles (id, salary, department_id)
VALUES (1, 50000, 1),
       (2, 60000, 2),
       (3, 70000, 3),
       (4, 80000, 4),
       (5, 85000, 5),
       (6, 90000, 6);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'John', 'Doe', 1, NULL),
       (2, 'Jane', 'Smith', 2, 1),
       (3, 'Michael', 'Johnson', 3, 2),
       (4, 'George', 'lopeez', 4, NULL),
       (5, 'Susan', 'Mccay', 5, 3),
       (6, 'Adam', 'Loves', 6, NULL);