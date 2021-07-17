SELECT * FROM tool_user tu
JOIN timeline t
ON tu.tool_user_id = t.tool_user_id
JOIN timeline_event te
ON t.timeline_id = te.timeline_id;