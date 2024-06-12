import sqlite3

# Connect to the database
conn = sqlite3.connect('Profile.db')
c = conn.cursor()

# Create table
c.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    profile_pic TEXT NOT NULL
)
''')

# Insert a sample user (for demonstration purposes)
c.execute('''
INSERT INTO users (username, email, phone, profile_pic)
VALUES ('sindhu', 'sindhu@example.com', '(123) 456-7890', 'profile-pic.jpg')
''')

# Commit and close
conn.commit()
conn.close()