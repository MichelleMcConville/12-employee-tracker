DROP DATABASE IF EXISTS employee_roster_db;
CREATE DATABASE employee_roster_db;

USE employee_roster_db;

CREATE TABLE department (
  id INT NOT NULL auto_increment PRIMARY KEY,
  dept_name VARCHAR(30)
);

CREATE TABLE employee_role (
  id INT NOT NULL auto_increment PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT, CONSTRAINT fkDept_id FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT NOT NULL auto_increment PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT, CONSTRAINT fkRole_id FOREIGN KEY (role_id) REFERENCES employee_role(id),
  manager_id INT, CONSTRAINT fkMgr_id FOREIGN KEY (manager_id) REFERENCES employee(id)
);
