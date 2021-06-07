UPDATE timeline
SET name = $1, tool_user_id = $2, start_year = $3, end_year = $4
WHERE timeline_id = $5;
