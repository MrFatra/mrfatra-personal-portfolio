import { Provider as ChakraProvider } from './components/ui/provider.tsx'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './utils/lang.ts'
import { Loading } from './components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </ChakraProvider>
  </StrictMode>
)
