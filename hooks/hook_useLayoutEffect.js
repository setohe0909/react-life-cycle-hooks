import React, { useState, useEffect, useLayoutEffect } from 'react'

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
        useLayoutEffect
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
  const [ count, setState ] = useState(0)

  useEffect(() => {
    console.log('useEffect 1')
  }, [ count ])

  useEffect(() => {
    console.log('useEffect 2')
  }, [ count ])

  // useEffect -> asincrono
  // useEffect -> se ejecuta despues de que se actualiza DOM
  // useLayoutEffect -> sincrono
  // useLayoutEffect -> se ejecuta antes de la actualizacion DOM

  useLayoutEffect(() => {
    console.log('useLayoutEffect 1')
  }, [ count ])

  useLayoutEffect(() => {
    console.log('useLayoutEffect 2')
  }, [ count ])

  const add = () => setState(count + 1)

  return (
    <div>
      <Header />
      <button onClick={add}>
        Add ({ count })
      </button>
    </div>
  )
}

export default App