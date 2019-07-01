-- Use this to add additional info (score, results) to a user.
UPDATE users
SET username = ${username},
    score = ${score},
    game_results = ${game_results}
WHERE ID = ${id};