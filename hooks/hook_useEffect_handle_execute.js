import React, { useState, useEffect } from 'react'

const Header = () => {
  const styles = {
    background: 'linear-gradient(20deg, #6813cb, #2575fc)',
    textAlign: 'center',
    borderRadius: '0.2em',
    color: '#FFF',
    padding: '0.3em',
    margin: '0.3em',
    fontSize: '14px'
  }

  return (
    <header style={styles}>
      <h1>
        Hook useEffect
        <span
          role='img'
          aria-label='hook emoji'
        >
          ⚓
        </span> 
      </h1>
    </header>
  )
}

const App = () => {
  const [ num, setNum ] = useState(0)
  const [ emoji, setEmoji ] = useState('🦁')

  useEffect(() => {
    alert('useEffect 🎇')
  }, [ emoji, num ])

  const addNum = () => setNum(num + 1)
  
  const toggleEmoji = () => {
    const nextEmoji = emoji === '🦁' ? '🙊' : '🦁'
    setEmoji(nextEmoji)
  }

  return (  
    <div>
      <Header />
      <button onClick={addNum}>
        ADD ( { num } )
      </button>
      <button onClick={toggleEmoji}>
        Alternar Emoji
      </button>
      <h1>
        { emoji }
      </h1>
    </div>
  )
}

export default App