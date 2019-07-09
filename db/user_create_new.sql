-- Use this to add a user to db.
INSERT INTO users (username)
VALUES (${username})
returning *;