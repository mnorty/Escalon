-- Use this to add a user to db.
INSERT INTO users (username, games_id)
VALUES (${username}, ${games_id})
returning *;