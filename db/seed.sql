INSERT INTO departments (dept_name)
VALUES
  ('None'),
  ('IWC'),
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
  ('Deputy',              135000, 3),
  ('Head of House',       120000, null),
  ('Teaching Staff',      80000,  3),
  ('Support Staff',       50000,  3),
  ('Student',             0,      null),
  ('Ghosts',              0,      null),
  ('Alumni',              0,      8);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('No',              'Manager',      1,  null),
  ('Godrick',         'Gryffindor',   2,  null),
  ('Albus',           'Dumbledore',   3,  null),
  ('Minerva',         'McGonagall',   5,  3),
  ('Severus',         'Snape',        5,  3),
  ('Filius',          'Flitwick',     5,  3),
  ('Pomona',          'Sprout',       5,  3),
  ('Rubeus',          'Hagrid',       6,  3),
  ('Argus',           'Filtch',       7,  3),
  ('Hermione',        'Granger',      8,  4),
  ('Cedric',          'Diggory',      8,  6),
  ('Luna',            'Lovegood',     8,  7),
  ('Draco',           'Malfoy',       8,  5),
  ('Nearly Headless', 'Nick',         9,  null),
  ('Sirius',          'Black',       10,  null);
