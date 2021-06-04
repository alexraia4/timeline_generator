DROP TABLE IF EXISTS tool_user, timeline, timeline_event;

CREATE TABLE IF NOT EXISTS tool_user (
    tool_user_id SERIAL PRIMARY KEY,
    user_name    VARCHAR,
    hash         VARCHAR,
    created      TIMESTAMP
);

CREATE TABLE IF NOT EXISTS timeline (
    timeline_id  SERIAL PRIMARY KEY,
    name         VARCHAR,
    tool_user_id INT,
    start_year   INT,
    end_year     INT,
    created      TIMESTAMP
);

CREATE TABLE IF NOT EXISTS timeline_event (
    timeline_event_id SERIAL PRIMARY KEY,
    name              VARCHAR,
    timeline_id       INT,
    content           TEXT,
    year              INT,
    month             INT,
    day               INT,
    hour              INT,
    second            INT,
    created           TIMESTAMP
);

INSERT INTO timeline (name, tool_user_id, start_year, created)
VALUES ('My Life', 1, 1996, CURRENT_TIMESTAMP(0));

INSERT INTO timeline (name, tool_user_id, start_year, created)
VALUES ('Earth History', 1, 1900, CURRENT_TIMESTAMP(0));

INSERT INTO timeline_event (name, timeline_id, content, year, month, day, hour, second, created)
VALUES ('Born', 1, 'The day I was born. It happend in Cincinnati, Ohio.', 1996, 7, 22, 19, 51, CURRENT_TIMESTAMP(0));

INSERT INTO timeline_event (name, timeline_id, content, year, month, day, created)
VALUES ('Obtained Rank of Eagle Scout', 1, 'The day I reached the the rank of Eagle Scout in the Boy Scouts of America.', 2014, 4, 29, CURRENT_TIMESTAMP(0));

INSERT INTO timeline_event (name, timeline_id, content, year, month, day, created)
VALUES ('Graduated High School', 1, 'The day I graduated from high school. I graduated from Bethpage Senior High School.', 2014, 6, 27, CURRENT_TIMESTAMP(0));

INSERT INTO timeline_event (name, timeline_id, content, year, month, day, created)
VALUES ('Graduated College', 1, 'The day I graduated from college. I graduated from Brigham Young University with a bachelor of science in computer information technology.', 2019, 12, 18, CURRENT_TIMESTAMP(0));

INSERT INTO timeline_event (name, timeline_id, content, year, month, day, created)
VALUES ('World War One', 2, 'The start of World War One. This is the day that Franz Ferdinand was assassinated.', 1914, 6, 28, CURRENT_TIMESTAMP(0));

INSERT INTO timeline_event (name, timeline_id, content, year, month, day, created)
VALUES ('World War Two', 2, 'The start of World War Two. This is the day that Germany invaded Poland.', 1939, 9, 1, CURRENT_TIMESTAMP(0));

INSERT INTO timeline_event (name, timeline_id, content, year, month, day, created)
VALUES ('I Have A Dream Speech', 2, 'Martin Luther King, Jr., delivered his iconic "I Have a Dream" speech at the March on Washington', 1963, 8, 28, CURRENT_TIMESTAMP(0));

INSERT INTO timeline_event (name, timeline_id, content, year, month, day, created)
VALUES ('Moon Landing', 2, 'American astronauts Neil Armstrong and Edwin "Buzz" Aldrin became the first humans ever to land on the moon.', 1969, 7, 20, CURRENT_TIMESTAMP(0));