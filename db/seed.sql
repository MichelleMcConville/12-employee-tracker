INSERT INTO department (dept_name)
VALUES
  ('Hogwarts'),
  ('Gryffindor'),
  ('Hufflepuff'),
  ('Ravenclaw'),
  ('Slytherin');

INSERT INTO employee_role (title, salary, department_id)
VALUES
  ('Founder',             '10000',  '01'),
  ('Headmaster',          '200000', '05'),
  ('Headmistress',        '200000', '05'),
  ('Deputy Headmaster',   '135000', '15'),
  ('Deputy Headmistress', '135000', '15'),
  ('Teacher',             '80000',  '20'),
  ('Student',             '0',      '77'),
  ('Ghosts',              '0',      '13');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  (''),

  