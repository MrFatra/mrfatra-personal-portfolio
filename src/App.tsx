import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router'
import { Navbar, Footer } from './components'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
