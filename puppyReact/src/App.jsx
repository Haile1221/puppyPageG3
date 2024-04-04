import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './PuppyComponent/Header/Header'
import Body from './PuppyComponent/Body/Body'
import Footer from './PuppyComponent/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
