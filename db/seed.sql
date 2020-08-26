CREATE TABLE practice_users (
    id SERIAL PRIMARY KEY,
    password VARCHAR(250),
    email VARCHAR(100),
    username VARCHAR(50), 
    profile_picture VARCHAR(250),
    is_admin BOOLEAN
);