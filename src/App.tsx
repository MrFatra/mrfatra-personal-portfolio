import './App.css'
import { Provider as ChakraProvider } from './components/ui/provider.tsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router'
import { Navbar } from './components'

function App() {
  
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
