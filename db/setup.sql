-- Database setup structure for reference

CREATE TABLE admins (
id SERIAL PRIMARY KEY,
firstname VARCHAR(50),
lastname VARCHAR(50),
email VARCHAR(50),
password TEXT
);

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(100),
games_id INTEGER REFERENCES games(id),
taken_date DATE,
score INTEGER,
game_results INT[]
);

CREATE TABLE games (
id SERIAL PRIMARY KEY,
admins_id INTEGER REFERENCES admins(id),
game_title VARCHAR(200),
game_intro VARCHAR(500),
creation_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE questions (
id SERIAL PRIMARY KEY,
games_id INTEGER REFERENCES games(id),
question VARCHAR(1000),
remediation VARCHAR(1000),
answer VARCHAR(500),
distractor1 VARCHAR(500),
distractor2 VARCHAR(500),
distractor3 VARCHAR(500)
);
