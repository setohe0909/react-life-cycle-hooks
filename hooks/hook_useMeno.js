import React, { useState, useMemo } from 'react'

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
        Hook useMemo
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

const SuperList = ({ list, log }) => {
  console.log('%cRender <SuperList /> ' + log, 'color: green')
  
  return (
    <ul>
      {list.map(item => (
        <li key={ item }>
          { item }
        </li>
      ))}
    </ul>
  )
}


const App = () => {
  const [ clicks, setClicks ] = useState(0)

  const add = () => {
    setClicks(clicks + 1)
  }

  const memoList = useMemo(() => {
    return (
      <SuperList
        list={[ 1, 2, 11, 55, 88 ]}
        log='Memorizado'
      />
    )
  }, [])

  return (
    <div>
      <Header />
      <button onClick={add}>
        Clicks ({ clicks })
      </button>

      <SuperList
        list={[ 'orange', 'pink', 'purple', 'yellow']}
        log='Normal'
      />

      { memoList }
    </div>
  )
}

export default App