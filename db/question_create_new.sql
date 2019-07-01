-- Use this to add questions, for a game, to the db. Note that you'll need to also add in the 'games_id'.
INSERT INTO questions (games_id, question, remediation, answer, distractor1, distractor2, distractor3)
VALUES (${games_id}, ${question}, ${remediation}, ${answer}, ${distractor1}, ${distractor2}, ${distractor3})
returning *;