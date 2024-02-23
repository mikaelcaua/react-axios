
import './App.css'
import { NavBar } from './components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
