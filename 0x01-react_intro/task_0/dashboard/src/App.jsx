import './App.css'
import logo from './ALX logo.jpg'


export default function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src= {logo} alt='ALX logo'/>
        <h1>School Dashboard</h1>
      </header>

      <main className='App-body'>
        <p>Login to access the full dashboard</p>
      </main>

      <footer className='App-footer'>
        <p>
          Copyright 2020 - ALX
        </p>
      </footer>
    </div>
  )
}