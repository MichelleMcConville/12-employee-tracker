DROP DATABASE IF EXISTS employee_roster;
CREATE DATABASE employee_roster;

USE employee_roster;

CREATE TABLE departments (
    id INT NOT NULL auto_increment PRIMARY KEY
  , dept_name VARCHAR(30)
);

CREATE TABLE roles (
    id INT NOT NULL auto_increment PRIMARY KEY
  , title VARCHAR(30)
  , salary DECIMAL(8, 2)
  , dept_id INT, CONSTRAINT fkDept_id FOREIGN KEY (dept_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INT NOT NULL auto_increment PRIMARY KEY
  , first_name VARCHAR(30)
  , last_name VARCHAR(30)
  , role_id INT, CONSTRAINT fkRole_id FOREIGN KEY (role_id) REFERENCES roles(id)
  , manager_id INT, CONSTRAINT fkMgr_id FOREIGN KEY (manager_id) REFERENCES employees(id)
);
