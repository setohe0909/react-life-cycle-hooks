import React, { useReducer } from 'react'

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
        Hook useReducer
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

// dispatch({ type: 'INCREMENT', title: 'algo' })
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }

    case 'SET_TITLE':
      return {
        ...state,
        title: action.title
      }

    default:
      return state
  }
}

const initialState = {
  count: 0,
  title: 'Hola'
}

const App = () => {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const increment = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const decrement = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handleTitle = (e) => {
    dispatch({
      type: 'SET_TITLE',
      title: e.target.value
    })
  }

  return (
    <div>
      <Header />
      <input
        type='text'
        onChange={handleTitle}
        value={state.title}
      />
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
      <h1>
        { state.count } - { state.title }
      </h1>
    </div>
  )
}

export default App