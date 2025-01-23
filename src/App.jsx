import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './containers/Layout/Layout'
import Sidbar from './components/Sidebar/Sidbar'
import ContactsTable from './components/ContactsTable/ContactsTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Layout/>
     
    </div>
  )
}

export default App
