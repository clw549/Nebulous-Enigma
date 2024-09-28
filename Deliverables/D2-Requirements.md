# 1. Positioning

Group 05 – *“Nebulous Enigma”*

Group Members: Ciaran Wham, Kameron Napier, Levi Ly, Isaac Schwarz, Collin Boyer, Kayden Vicenti


### 1.1 Problem statement

The problem of poorly-designed story games affects gamers; the impact of which is wasting players' time and money. 

### 1.2 Product Position Statement

Value proposition: Nebulous Enigma allows gamers to combat boredom while prioritizing entertainment, creating adventure games, and relaxation by avoiding overwhelming video games.  [Prev: For entertainment, solving boredom, and allowing users to take a break from overwhelming video games.]

### 1.3 Value proposition and customer segment

Consumer segment: Nebulous Enigma welcomes? Is for? Any type and all levels of gamers. [Prev: Visual novel fans and gamers.]

# 2. Stakeholders

# 3. Functional requirements (features)

1. The player can select different paths to progress the story differently.
2. If the player is logged into an account, their progress is saved as they play to a database server.
3. The game must have multiple endings.
4. Progress saves
5. progress page
6. Easy to navigate website
7. Profile page - customization
8. Customizable options - light/dark mode
9. Content library? Lore page, characters discovered
10. Achievements?
11. Feedback page?
12. Discussion page? Similar to Reddit/help/lore discussion
13. edit/delete posts/replies


# 4. Non-functional requirements

1. Going from one page to another page must be almost instantaneous
2. The game must be able to run in a web browser
3. The game must use a database of some kind to save a user's progress

# 5. MVP

# 6. Use cases

### 6.1 Use case diagram

![Use case diagram](Nebulous-Enigma-Use-cases.png)

### 6.2 Use case descriptions and interface sketch

### *Use Case 1: Make a story choice*
**Actor:** Player\
**Trigger:** The player wants to perform an action in the story.\
**Pre-conditions:** The player is at a branching point of the story.\
**Post-condition:** The player progresses to the next part of the story.

**Success Scenario:**

1. The system presents a number of options to progress the story.
2. The player selects an option.
3. The system saves the selected option.
4. The system displays the next story page. 

**Alternate Scenarios:**

*1a. The player is not at a branching point.*
1. The system does not display any options.
2. The player must progress to the next story page.

*3a. The system is unable to save.*
1. The system notifies the player that progress is unable to be saved.
2. The system allows the player to continue playing without save functionality.

*4a. The system is unable to access the next story node.*
1. The system notifies the player of the error and asks them to try again later.

(!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ADD SKETCH LATER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)

### *Use Case 2: Load progress*
**Actor:** Player\
**Trigger:** The player wants to load their save file from a previous play through.\
**Pre-conditions:** The player has a save file and is at the starting screen of the game.\
**Post-condition:** The player is redirected to their save point. 

**Success Scenario:**

1. The system presents an option to load a save.
2. The player enters their name.
3. The system redirects the player to the point in the game where they last saved.
4. The system displays the next story page. 

**Alternate Scenarios:**

*2a. The player has no save to load.*
1. The system tells the user that their name is not recognized.
2. The system displays the start screen.

*2b. The player spells their name differently to the last time they saved.*
1. The system tells the user that their name is not recognized.
2. The system displays the start screen.

*3a. The save data is unusable by the system*
1. The system notifies the player of this error
2. The system redirects the player back to the start screen

*4a. The system is unable to access the next story node.*
1. The system notifies the player of the error and asks them to try again later.

![Use Case 2](https://i.ibb.co/TvC6jmQ/image-2024-09-27-142247730.png)

### *Use Case 4: User creates/resolves discussion post*
**Actor:** user/gamer\
**Trigger:** The user navigates to the discussion page.\
**Pre-conditions:** The user must have a profile before creating a post.\
**Post-condition:**  successfully post/resolved discussion. 

**Success Scenario:**

1. User logs in
2. User navigates to the discussion page
3. User writes discussion topic
4. User uploads/resolves discussion
5. System adds discussion post to discussion page/disables further commenting
6. Discussion visible to other users 


**Alternate Scenario #1:**

1. The system does not have user information (needs to sign in)
2. System notifies user
3. The system guides the user to in-page

**Alternate Scenario #2:**
1. User writes post 
2. System adds posts to the discussion page
3. System notifies successful upload 

**Alternate Scenario #3:**
1. User navigates to the discussion page
2. User resolves discussion
3. System disables further commenting
4. The system notifies the user of the resolved comment

Mock up ~ coming soon...

### *Use case 4: User log in*
**Success scinario:**
1. User inputs username and password.
2. User clicks login button.
3. System checks database for matching password and username.
4. User is logged into account.

**Alternate Scenarios:**
*3.a Username not found*
1. System gives user error.
2. Send user back to login screen.

*3.b Password does not match*
1. System gives user error
2. Send user back to login screen.

*3.c Database unreachable*
1. Provide error information to user.
2. send user back to login screen.

**Page mockup:**
![Use case 4 mockup image of title screen](deliverable_images/Title_Mockup.jpg)

# 7. User stories

1. As a player, I want to customize my character so that my playthroughs feel unique. (Priority: 12 (or some other low number), Estimation: (planning poker required))
2. As a player, I want to return to previous choices I've made so that I can experience other paths of the story. (Priority: 3, Estimation: (planning poker required))
3. As a player, I want to read a story, so that I am entertained (Priority 2, Estimation: (planning poker required))
4. As a player, I want to read multiple endings, so that I can learn more about the game's world (Priority 2, Estimation: (planning poker required))
5. As a new gamer, I want to be able to post my questions about the game, so that I can understand how to navigate this game. (Priority 10, Estimation: 4 weeks)
6. As a gamer, I want to be able to resolve a topic I posted, so that others can find the solution, I too was looking for. (Priority 10, Estimation: 1 day)
7. As a player, I want to be able to go back to the story, so I can reread content (Priority: 4, Estimation: (pending))
8. As a player, I want to be able to play without logging in, so I can get a fresh start (Priority: 3, Estimation: (pending))
9. placeholder
10. placeholder
11. As a player I would like to see the percentage of players that hit endings so that I can have more sense of community. (priority 7 (3 days))
12. As a player I would like to have sound or music to improve my immersion. (priority 8 (2 days))

# 8. Issue Tracker
