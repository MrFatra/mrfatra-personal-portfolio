import './App.css'
import { Provider as ChakraProvider } from './components/ui/provider.tsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router'
import { Navbar, Footer } from './components'

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
