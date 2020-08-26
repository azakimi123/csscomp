INSERT INTO practice_users (
    password,
    email,
    username,
    profile_picture,
    is_admin
) VALUES (
    ${password},
    ${email},
    ${profile_picture},
    'false'
);