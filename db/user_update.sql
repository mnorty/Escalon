-- Use this to add additional info (score, results) to a user.
UPDATE users
SET username = ${username},
    score = ${score}
WHERE ID = ${id};