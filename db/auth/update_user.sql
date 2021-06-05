UPDATE tool_user
SET user_name = $1, hash = $2
WHERE tool_user_id = $3;

SELECT * FROM tool_user
WHERE tool_user_id = $3;