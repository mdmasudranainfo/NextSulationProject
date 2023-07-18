import { Outlet } from 'react-router-dom'

import Navbar from './Component/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
