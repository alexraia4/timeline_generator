UPDATE tool_user
SET email = $1, hash = $2
WHERE tool_user_id = $3;

SELECT * FROM tool_user
WHERE tool_user_id = $3;