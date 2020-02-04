import React, { Component } from 'react'

class Http extends Component {
  state = {
    photos: []
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(photos => this.setState({ photos }))
  }
  
  render () {
    const { photos } = this.state
    return (
      <div>
        {photos.map(photo => (
          <img
            key={photo.id}
            src={photo.thumbnailUrl}
            alt={photo.title}
          />
        ))}
      </div>
    )
  }
}

class Events extends Component {
  state = {
    width: window.innerWidth
  }

  componentDidMount () {
    window.addEventListener('resize', this.handlerResize)
  }

  handlerResize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  render () {
    return (
      <div>
        <h2>Events { this.state.width }</h2>
      </div>
    )
  }
}

class App extends Component {
  componentDidMount () {
    // Solicitudes HTTP
    // Agregar Event Listeners
  }

  render () {
    return (
      <div>
        <h1>componentDidMount</h1>
        <Events />
      </div>
    )
  }
}

export default App