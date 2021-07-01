import { directive } from '@babel/types'
import React, { useState } from 'react'

const Login = ({ onSubmit}) => {
  const [apodo, setApodo] = useState('')
  let player = {}
  
  const handleSubmit = (e) => {
    e.preventDefault()
    player.nombre=apodo
    player.puntaje=0
    onSubmit(player)
  }
  return(
    <div className="login">
      <form onSubmit={handleSubmit}>
          <input 
          className="input"
          placeholder="Ingrese un nombre"
          value={apodo}
          onChange={e => setApodo(e.target.value)}
          required
          />
          <button className="but">Agregar</button>
      </form>
    </div>
  )
}

export default Login