-- Use this add a new admin account to the db.
INSERT INTO admins (firstname, lastname, email, password)
VALUES (${firstname}, ${lastname}, ${email}, ${password})
returning email, ID;