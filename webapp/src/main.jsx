import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AcademicApp from './AcademicApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AcademicApp />
  </StrictMode>,
)
