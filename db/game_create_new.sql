-- Use this to add a new game to the db. Note that you'll also need to add in the 'admins_id'.
INSERT INTO games (admins_id, game_title, game_intro, gameroom_id)
VALUES (${admins_id}, ${game_title}, ${game_intro}, ${gameroom_id})
;

select * from games where gameroom_id = ${gameroom_id}