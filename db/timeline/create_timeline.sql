INSERT INTO timeline (name, tool_user_id, start_year, created)
VALUES ($1, $2, $3, CURRENT_TIMESTAMP(0))
returning *;