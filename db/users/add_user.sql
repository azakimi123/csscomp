INSERT INTO practice_users (
    password,
    email,
    username,
    profile_picture,
    is_admin
) VALUES (
    ${password},
    ${email},
    ${username},
    'https://image.flaticon.com/icons/svg/2948/2948035.svg',
    FALSE
)
returning id, username, email, profile_picture;