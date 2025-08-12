import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AcademicApp from './AcademicApp.jsx'
import OGImage from './open-graph/OGImage.jsx'
import OGImageV2 from './open-graph/OGImageV2.jsx'
import OGImageV3 from './open-graph/OGImageV3.jsx'
import OGImageTwitter from './open-graph/OGImageTwitter.jsx'
import OGImageSquare from './open-graph/OGImageSquare.jsx'
import OGImageStory from './open-graph/OGImageStory.jsx'
import OGImageGenerator from './open-graph/OGImageGenerator.jsx'
import './index.css'

const router = createBrowserRouter([
  { path: '/', element: <AcademicApp /> },
  { path: '/about', element: <AcademicApp initialView="about" /> },
  { path: '/press', element: <AcademicApp /> },
  { path: '/og-generator', element: <OGImageGenerator /> },
  { path: '/og-image', element: <OGImage /> },
  { path: '/og-image-v2', element: <OGImageV2 /> },
  { path: '/og-image-v3', element: <OGImageV3 /> },
  { path: '/og-image-twitter', element: <OGImageTwitter /> },
  { path: '/og-image-square', element: <OGImageSquare /> },
  { path: '/og-image-story', element: <OGImageStory /> },
  // Category routes map to the same SPA, AcademicApp reads 'category' from URL or path
  { path: '/:categorySlug', element: <AcademicApp /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
