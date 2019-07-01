-- Use this to pull all games from an admin. Use on the dashboard page.
SELECT * FROM games
WHERE admins_id = ${id}
ORDER BY id DESC;