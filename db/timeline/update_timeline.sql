UPDATE timeline
SET name = $1, tool_user_id = $2, start_year = $3
WHERE timeline_id = $4;