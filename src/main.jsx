import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './Router/router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Utilities/AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <AuthProvider> 
 <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
