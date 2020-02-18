import React, { useState, useEffect, useRef } from 'react'

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
        Hook useRef
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
  const [ name, setName ] = useState('')
  const [ products, setProducts ] = useState([])

  const entrada = useRef()

  useEffect(() => {
    // debounce
    setTimeout(() => {
      if (name === entrada.current.value) {
        // Solicitud HTTP
        fetch('https://universidad-react-api-test.luxfenix.now.sh/products?name=' + name)
          .then(res => res.json())
          .then(data => setProducts(data.products))
      }
    }, 600)
  }, [ name ])

  const handleInput = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <Header />
      <input
        type='text'
        onChange={handleInput}
        ref={entrada}
      />
      <ul>
        {products.map(product => (
          <li key={product.id}>
            { product.name }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App