import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AcademicApp from './AcademicApp.jsx'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <AcademicApp /> },
  { path: '/about', element: <AcademicApp initialView="about" /> },
  // Category routes map to the same SPA, AcademicApp reads 'category' from URL or path
  { path: '/:categorySlug', element: <AcademicApp /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
