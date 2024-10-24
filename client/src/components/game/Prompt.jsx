import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import Choice from './Choice'
import story from '../../story'

function Prompt({ currentID, choiceClicked }) {

  const [user, setUser] = useState(null); // State to hold the user data

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser); // Parse the user data
      setUser(foundUser); // Update state with the user data

      console.log(foundUser.testing)
      console.log(loggedInUser)
    }

  }, []); // Empty dependency array means this runs once on mount

  
  return (
    <div>
      <div>
        <p> { story[currentID].text } </p>
      </div>

      <div>
        { story[currentID].choice.map((choice) => {
          return (
            // goes to a choice which is an index, here "choice.goto" goes to the button that was clicked goto index
            <Choice handleClick={ () => choiceClicked(choice.goTo) } text={ choice.text } />
          )
        })}
      </div>
    </div>
  )
}

export default Prompt;
