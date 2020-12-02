INSERT INTO departments (dept_name)
VALUES
  ('None'),
  ('Hogwarts'),
  ('Gryffindor'),
  ('Hufflepuff'),
  ('Ravenclaw'),
  ('Slytherin'),
  ('Alumni');

INSERT INTO roles (title, salary, dept_id)
VALUES
  ('None',                0,      1),
  ('Founder',             1000,   2),
  ('Headmaster',          200000, 3),
  ('Deputy',              135000, 4),
  ('Head of House',       120000, 5),
  ('Teaching Staff',      80000,  6),
  ('Support Staff',       50000,  3),
  ('Student',             0,      4),
  ('Ghosts',              0,      5),
  ('Alumni',              0,      7);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('No',              'Manager',     10,  null),
  ('Godrick',         'Gryffindor',   1,  null),
  ('Albus',           'Dumbledore',   2,  null),
  ('Minerva',         'McGonagall',   4,  2),
  ('Severus',         'Snape',        4,  2),
  ('Filius',          'Flitwick',     4,  2),
  ('Pomona',          'Sprout',       4,  2),
  ('Rubeus',          'Hagrid',       5,  2),
  ('Argus',           'Filtch',       6,  2),
  ('Hermione',        'Granger',      7,  3),
  ('Cedric',          'Diggory',      7,  5),
  ('Luna',            'Lovegood',     7,  6),
  ('Draco',           'Malfoy',       7,  4),
  ('Nearly Headless', 'Nick',         8,  null),
  ('Sirius',          'Black',        9,  null);
