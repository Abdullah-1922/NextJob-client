
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Routes/AuthProvider'

const queryClient =new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <AuthProvider>
 <QueryClientProvider client={queryClient}>
  <div className='max-w-7xl mx-auto  dark:border   min-h-screen '>
   <RouterProvider router={router}>
   </RouterProvider>
   </div>
 </QueryClientProvider>
  </AuthProvider>
   
 
)
