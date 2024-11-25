# 1 Introduction
Our system is a web-based interactive storytelling game that immerses players in a "choose your own adventure" experience. Each story unfolds through a series of pages, featuring 
descriptive text to set the narrative and interactive buttons for players to make choices that influence the plot's direction. The system ensures accessibility and flexibility by 
providing multiple login options: users can create an account, log in, or play as a guest. Account creation and login credentials, including usernames and passwords, are securely managed 
and stored using MongoDB. The game is built on the MERN stack, leveraging MongoDB for efficient data handling and JavaScript for seamless gameplay logic.

One of the standout features is the ability to save and resume progress for logged-in users. Each player's progress is tracked and stored, enabling them to pick up right where they left 
off. Guest users, while not having progress saved, can fully experience the game’s interactive narrative. The user-friendly interface includes a sign-up page for new accounts and ensures 
a streamlined experience for navigating between the game and login pages. This system provides an engaging and personalized adventure while maintaining robust back-end functionality to 
support user accounts and data persistence.


# 2 Implemented Requirements

## 2.1 Enriching story
Requirement: As a player, I want to read multiple endings, so that I can learn more about the game's world.

Issue: https://github.com/clw549/Nebulous-Enigma/issues/34

Pull request: https://github.com/clw549/Nebulous-Enigma/pull/114

Implemented by: Ciaran Wham

Approved by: Levi Ly

## 2.2 Backtracking
Requirement: As a player, I want to return to previous choices I've made, so that I can experience other paths of the story.

Issue: https://github.com/clw549/Nebulous-Enigma/issues/43

Pull request: https://github.com/clw549/Nebulous-Enigma/pull/114

Implemented by: Ciaran Wham

Approved by: Levi Ly

![Backtracking](./deliverable_images/d6_p2_backtracking.png)

## 2.3 Saving/Loading
Requirement: If the player is logged into an account, their progress is saved as they play to a database server.

Issue: https://github.com/clw549/Nebulous-Enigma/issues/116

Pull request: https://github.com/clw549/Nebulous-Enigma/pull/109

Implemented by: Levi Ly

Approved by: Ciaran Wham

## 2.4 Navigation Bar
Requirement: While the player is playing the game, they have the option to return home, or logout.

Issue: https://github.com/clw549/Nebulous-Enigma/issues/116

Pull request: https://github.com/clw549/Nebulous-Enigma/pull/115

Implemented by: Isaac Schwarz

Approved by: Levi Ly

![Navbar](https://i.ibb.co/zscXjNT/Screenshot-2024-11-23-at-9-31-11-PM.png)

# 3 Tests
## 3.1 Unittests
1. This test was made with supertest
2. Do keep in mind that this test file uses server.js and app.js files in the root directory, but this is where all the test code actually is:
   https://github.com/clw549/Nebulous-Enigma/tree/main/tests
3. So this tests if the root page, aka the "/" page can recieve a button click from the user. This uses a mock button by using a boolean called ButtonPressed.
   The code for this mock button is located here:

   Mock button: https://github.com/clw549/Nebulous-Enigma/blob/main/server.js

   Tests: https://github.com/clw549/Nebulous-Enigma/tree/main/tests

4. Please keep in mind that both the automated tests are run at once. The one that passed is the button pressed one.
   The one that failed is a user log in test, which will be discussed in more detail in 3.2.
   ![3.1 image](https://i.ibb.co/xmx5gW5/Screenshot-2024-11-23-162547.png)

## 3.2 Acceptance tests
1. This test was made with supertest
2. Do keep in mind that this test file uses server.js and app.js files in the root directory, but this is where all the test code actually is:
   https://github.com/clw549/Nebulous-Enigma/tree/main/tests
3. So this tests tests if a given username/password combination will work in playing the game.
   This uses a dummy username and a dummy password to test and see if it will move onto the next screen.
   This test should fail because obviously the dummy username and password are not in the database.

   The code for this test is in the same file as 3.1: https://github.com/clw549/Nebulous-Enigma/tree/main/tests

4. Please keep in mind that both the automated tests are run at once. The one that failed is the fake log in attempt.
   The error code it gives is 404 because it couldn't find the page that it would go to had the username and password been legit.
   ![3.2 image](https://i.ibb.co/xmx5gW5/Screenshot-2024-11-23-162547.png)


# 4 Demo
https://nau.zoom.us/rec/share/0ZgoaNuvpimjmlsata5dDj7WlGYnwwdk_AFO6NKWmxDm5N51mO4GQwU-JudH-mM.3sha_PNrMLL1nhdE

# 5 Code Quality
We adhered to the following practices when writing code:
- Variables and functions should have concise but descriptive names, using lowerCamelCase. Avoid unclear abbreviations. Never use single-letter names like "x".
- Function names should be verbs.
- Indents are 2 spaces wide.
- Do not use semicolons in React components. It's possible for semicolons to break some lines of code, so we omit them.
- Use spaces between curly braces and the expression inside them, e.g. { value }.
- Define state variables at the top of the component.
- Define functions using 'const'. For our purposes, there is no difference between using 'const' and 'function', but we stick to using 'const'.
- For multi-line expressions (function declarations, if/else conditions) place opening curly brackets on the same line as the preceding control flow statement. Ending curly brackets should be on their own line.
- Use whitespace to separate functions, behavior, etc. as appropriate. One line of whitespace is usually adequate. Use no more than two lines of whitespace between elements.

# 6 Lessons learned
We have learned a lot about React and MongoDB through this project. React has been a great tool for making our story modular, where each story prompt uses the same HTML/Javascript and simply alters the text displayed to the user. In this way, we made our website easy to add story pages to and have any number of options for each one. Additionally, React helps make the site more modification-friendly. MongoDB is the database system we used for our website. We learned both how to query the database and how to add documents (in our case, accounts) to it. We have also learned how to use local browser storage so that a user can be remembered and have information specific to them used within the website, such as character names being displayed in the story. We have also grown greatly as a team, showing how well we can work together and helping each other in pursuit of bettering ourselves. Overall, this project has been a great experience in learning teamwork and the systems necessary to run a website.
