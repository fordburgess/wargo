import React, { useState } from 'react'
import styles from './styles/Home.module.css'

const HomeView = () => {
  const [currentAction, setCurrentAction] = useState(0) // 0 for joining a random game, 1 for joining an existing game

  return (
    <div className='h-screen w-screen flex items-center justify-center'>      
      <div className='flex flex-col items-center'>
        <h1 className='font-military text-8xl mb-8'>WARGO</h1>
        <div className='flex flex-col items-center'>
          <input 
            className='large-rounded-input'
            id={styles.gamerTagInput}
            placeholder='Enter Your Desired Screen Name'          
          />     
          {
            currentAction == 1 && (
              <input 
                className='large-rounded-input'
                id={styles.codeInput}
                placeholder='Enter Game ID'          
              />
            )
          }
        </div>
        <button 
          className='standard-button mb-8'
          id={styles.joinButton}
        >
          {
            currentAction == 0 ? "Find A Game" : "Join"
          }
        </button>
        {
          currentAction == 0 && (
            <p className='underline hover:cursor-pointer' onClick={() => setCurrentAction(1)}>Or Join An Existing Lobby</p>
          )
        }
        {
          currentAction == 1 && (
            <p className='underline hover:cursor-pointer' onClick={() => setCurrentAction(0)}>Or Join A Random Game</p>
          )
        }
      </div>
    </div>
  )
}

export default HomeView
