import React from 'react'
import SignUp from './SignUp'
import AppBar from './AppBar'
const App = () => {
  return (
    <div style={{width:"100vw", height:"100vh",backgroundColor:"#eee"}}>
      <AppBar/>
      <SignUp/>
    </div>
  )
}



export default App