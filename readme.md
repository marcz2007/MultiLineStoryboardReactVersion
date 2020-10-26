# A MultiLine StoryBoard created in React 
# Task:
To create a web application which allows users to enter multiple child sentences of a root sentence and then be able to follow the children along in order to create a storyboard. Made using React.

## Purpose: 
To improve skills in React with emphasis on handling the state appropriately.

## How to setup: 
1. Clone repository
2. Once npm is already installed, open project in terminal and type 'npm start'
3. Open browser to localhost:3000
4. Type in a sentence anywhere to set it as the root, then keep typing following sentences in any of the text fields - clicking on them will start a new root!

## Key Details on How it Works:

1. State stores all data inputted by user
2. Submit method submits all user input and updates the state
3. Select method, upon clicking a button (after user inputs text), helps the state keep track of the current node by restting the currentnode to a child object
4. Reset pointer method uses while loop to go back through parent nodes until there is no parent, giving the first parent node and thus the first user entered text - this allows users to go back through their storyboard. 
