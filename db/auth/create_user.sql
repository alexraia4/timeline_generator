INSERT INTO tool_user (email, hash, created)
VALUES ($1, $2, CURRENT_TIMESTAMP(0))
returning *;