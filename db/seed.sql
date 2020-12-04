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
  ('No',              'Manager',     10,  null),
  ('Godrick',         'Gryffindor',   1,  null),
  ('Albus',           'Dumbledore',   2,  null),
  ('Minerva',         'McGonagall',   4,  3),
  ('Severus',         'Snape',        4,  3),
  ('Filius',          'Flitwick',     4,  3),
  ('Pomona',          'Sprout',       4,  3),
  ('Rubeus',          'Hagrid',       5,  3),
  ('Argus',           'Filtch',       6,  3),
  ('Hermione',        'Granger',      7,  4),
  ('Cedric',          'Diggory',      7,  6),
  ('Luna',            'Lovegood',     7,  7),
  ('Draco',           'Malfoy',       7,  5),
  ('Nearly Headless', 'Nick',         8,  null),
  ('Sirius',          'Black',        9,  null);
