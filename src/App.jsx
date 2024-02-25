import { useState } from 'react'
import './App.css'
import UserImage from './component/page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserImage />
    </>
  )
}

export default App
