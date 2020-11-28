INSERT INTO department (dept_name)
VALUES
  ('Hogwarts'),
  ('Gryffindor'),
  ('Hufflepuff'),
  ('Ravenclaw'),
  ('Slytherin');

INSERT INTO employee_role (title, salary, department_id)
VALUES
  ('Founder',             '1000',   '101'),
  ('Headmaster',          '200000', '105'),
  ('Headmistress',        '200000', '105'),
  ('Deputy Headmaster',   '135000', '115'),
  ('Deputy Headmistress', '135000', '115'),
  ('Teacher',             '80000',  '120'),
  ('Student',             '0',      '177'),
  ('Ghosts',              '0',      '113');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Godrick',         'Gryffindor', '0', 'null'),
  ('Helga',           'Hufflepuff', '0', 'null'),
  ('Rowena',          'Ravenclaw',  '0', 'null'),
  ('Salazar',         'Slytherin',  '0', 'null'),
  ('Albus',           'Dumbledore', '1', '99'),
  ('Minerva',         'McGonagall', '1', '90'),
  ('Rubeus',          'Hagrid',     '3', '90'),
  ('Argus',           'Filtch',     '5', '90'),
  ('Remus',           'Lupin',      '3', '90'),
  ('Gilderoy',        'Lockhart',   '3', '90'),
  ('Alastor',         'Moody',      '3', '90'),
  ('Severus',         'Snape',      '3', '90'),
  ('Poppy',           'Promfrey',   '3', '90'),
  ('Sybill',          'Trelawney',  '3', '90'),
  ('Aurora',          'Sinistra',   '3', '90'),
  ('Pomona',          'Sprout',     '3', '90'),
  ('Rolanda',         'Hooch',      '4', '90'),
  ('Harry',           'Potter',     '8', 'null'),
  ('Hermione',        'Granger',    '8', 'null'),
  ('Ron',             'Weasley',    '8', 'null'),
  ('The Bloody',      'Baron',      '7', 'null'),
  ('The Fat',         'Friar',      '7', 'null'),
  ('The Gray',        'Lady',       '7', 'null'),
  ('Nearly Headless', 'Nick',       '7', 'null'),

  