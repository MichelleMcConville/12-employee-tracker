INSERT INTO department (dept_name)
VALUES
  ('Hogwarts'),
  ('Gryffindor'),
  ('Hufflepuff'),
  ('Ravenclaw'),
  ('Slytherin');

INSERT INTO employee_role (title, salary, department_id)
VALUES
  ('Founder',             1000,   101),
  ('Headmaster',          200000, 105),
  ('Headmistress',        200000, 105),
  ('Deputy Headmaster',   135000, 115),
  ('Deputy Headmistress', 135000, 115),
  ('Teacher',             80000,  120),
  ('Student',             0,      177),
  ('Ghosts',              0,      113);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Godrick',         'Gryffindor', 0, 00),
  ('Helga',           'Hufflepuff', 0, 00),
  ('Rowena',          'Ravenclaw',  0, 00),
  ('Salazar',         'Slytherin',  0, 00),
  ('Albus',           'Dumbledore', 1, 99),
  ('Minerva',         'McGonagall', 1, 90),
  ('Rubeus',          'Hagrid',     3, 90),
  ('Argus',           'Filtch',     5, 90),
  ('Remus',           'Lupin',      3, 90),
  ('Gilderoy',        'Lockhart',   3, 90),
  ('Alastor',         'Moody',      3, 90),
  ('Severus',         'Snape',      3, 90),
  ('Poppy',           'Promfrey',   3, 90),
  ('Sybill',          'Trelawney',  3, 90),
  ('Aurora',          'Sinistra',   3, 90),
  ('Pomona',          'Sprout',     3, 90),
  ('Rolanda',         'Hooch',      4, 90),
  ('Harry',           'Potter',     8, 51),
  ('Hermione',        'Granger',    8, 51),
  ('Ron',             'Weasley',    8, 51),
  ('Susan',           'Bones',      8, 62),
  ('Cedric',          'Diggory',    8, 62),
  ('Luna',            'Lovegood',   8, 73),
  ('Cho',             'Chang',      8, 73),
  ('Draco',           'Malfoy',     8, 84),
  ('Pansy',           'Parkinson',  8, 84),
  ('Nearly Headless', 'Nick',       7, 51),
  ('The Fat',         'Friar',      7, 62),
  ('The Gray',        'Lady',       7, 73),
  ('The Bloody',      'Baron',      7, 84);

  