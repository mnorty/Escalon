-- Use this to get all questions for a single game.
-- SELECT * FROM questions
-- WHERE ID = ${id};

SELECT *
from questions
INNER JOIN games
ON questions.games_id = games.id
WHERE games.gameroom_id = $1