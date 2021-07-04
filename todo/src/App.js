import React from 'react'
import { useSelector } from 'react-redux'
import "./App.css"
import Navbar from './Routes/Navbar'
import Route from './Routes/Route'
import Sidebar from './Routes/Sidebar'

const App = () => {
  const {auth } = useSelector(state => state.auth)
  console.log(auth)
  return (
    <div className="App" >
      {!auth ? <Navbar />  : <Sidebar/>}
      <Route />
      {/* <div style={{minHeight:'300px'}}></div> */}
      {/* <h1>hi</h1>  */}
    </div>
  )
}

export default App
