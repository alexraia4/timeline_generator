INSERT INTO timeline_event (name, timeline_id, content, year, month, day, hour, second, created)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, CURRENT_TIMESTAMP(0))
returning *;