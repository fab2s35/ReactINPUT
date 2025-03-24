import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      
    <div style={{
      backgroundColor: '#cbace3',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '60px',
      boxShadow: '0 2px 10px rgb(137, 20, 205)',
      maxWidth: '300px',
      margin: 'auto',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#333' }}>Ingrese los números</h2>

      <p style={{ margin: '10px 0', color: '#1e1e1f' }}>Número 1:</p>
      <input type='text' style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        marginBottom: '10px'
      }} />

      <p style={{ margin: '10px 0', color: '#1e1e1f' }}>Número 2:</p>
      <input type='text' style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        marginBottom: '10px'
      }} />

      <button style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#ffffff',
        color: 'black',
        marginTop: '17px',
        border: '1px solid',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>Enviar</button>
    </div>
      </div>
    </>
  )
}

export default App
