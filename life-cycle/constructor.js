import React, { Component } from 'react'


class Contador extends Component {
  constructor (props) {
    super(props)

    // Pasar el contexto a los metodos de clase
    this.agregar = this.agregar.bind(this)
    
    // Crear Refs para acceso al elemento en el DOM
    this.title = React.createRef()

    // Inicializar el estado
    this.state = {
      num: props.num
    }
  }

  agregar () {
    console.log(this.title)

    this.setState(state => ({
      num: state.num + 1
    }))
  }

  render () {
    return (
      <div>
        <h2
          ref={this.title}
        >
          { this.state.message }
        </h2>
        <button onClick={this.agregar}>
          Click ( { this.state.num } )
        </button>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <h1>Metodo constructor</h1>
        <Contador num={1200} />
        <Contador num={20} />
      </div>
    )
  }
}

export default App