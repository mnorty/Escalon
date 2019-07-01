-- use this to check to compare existing admins email with an admin trying to create an account.
SELECT * FROM admins
WHERE email = ${email};