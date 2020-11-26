DROP DATABASE IF EXISTS employeeRoster_db;
CREATE DATABASE employeeRoster_db;

USE employeeRoster_db;

CREATE TABLE department (
  id INT NOT NULL auto_increment PRIMARY KEY,
  dept_name VARCHAR(30)
);

CREATE TABLE employee_role (
  id INT NOT NULL auto_increment PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES (department_id)
);

CREATE TABLE employee (
  id INT NOT NULL auto_increment PRIMARY KEY,
  first_name
  last_name
  role_id
  manager_id
);


