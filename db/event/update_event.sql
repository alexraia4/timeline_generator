UPDATE timeline_event 
SET name = $1, timeline_id = $2, content = $3, year = $4, month = $5, day = $6, hour = $7, second = $8 
WHERE timeline_event_id = $9;