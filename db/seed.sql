INSERT INTO departments (dept_name)
VALUES
  ('None'),
  ('IWC'),
  ('Executive'),
  ('Education'),
  ('Support'),
  ('Scholarship'),
  ('Pupil'),
  ('Alumni'),
  ('Deceased');

INSERT INTO roles (title, salary, dept_id)
VALUES
  ('None',                0,      1),
  ('Headmaster',          200000, 2),
  ('Deputy',              150000, 3),
  ('Head of House',       120000, 3),
  ('Professor',           100000, 4),
  ('Support Staff',       50000,  5),
  ('Prefect',             10000,  6),
  ('Student',             0,      7),
  ('Alumni',              0,      8),
  ('Ghosts',              0,      9);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('No',              'Manager',      1,  1),
  ('Albus',           'Dumbledore',   2,  1),
  ('Minerva',         'McGonagall',   3,  2),
  ('Severus',         'Snape',        4,  2),
  ('Filius',          'Flitwick',     4,  2),
  ('Pomona',          'Sprout',       4,  2),
  ('Rubeus',          'Hagrid',       5,  2),
  ('Argus',           'Filtch',       6,  2),
  ('Ron',             'Weasley',      7,  3),
  ('Hermione',        'Granger',      8,  3),
  ('Cedric',          'Diggory',      8,  5),
  ('Luna',            'Lovegood',     8,  6),
  ('Draco',           'Malfoy',       8,  4),
  ('Nearly Headless', 'Nick',        10,  1),
  ('Sirius',          'Black',        9,  1);
