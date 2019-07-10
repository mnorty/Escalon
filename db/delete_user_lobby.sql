DELETE FROM gamelobby
WHERE username = ${username};

DELETE FROM users
WHERE username = ${username};

