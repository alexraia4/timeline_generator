INSERT INTO tool_user (user_name, hash, created)
VALUES ($1, $2, CURRENT_TIMESTAMP(0))
returning *;