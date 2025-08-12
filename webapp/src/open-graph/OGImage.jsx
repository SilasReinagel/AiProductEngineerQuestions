// @ts-check
import React, { useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'

/**
 * Open Graph Image Component
 * Renders a 1200x630 image optimized for social sharing
 */
function OGImage() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Set page title
    document.title = 'AI Product Engineering Interview Guide - OG Image'
    
    // Remove default body styles for this route
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.background = 'white'
    
    return () => {
      // Cleanup - restore default styles when leaving route
      document.body.style.margin = ''
      document.body.style.padding = ''
      document.body.style.background = ''
    }
  }, [])

  /**
   * Converts the OG image div to canvas and downloads as JPG
   */
  const saveAsJPG = async () => {
    try {
      const element = canvasRef.current
      if (!element) return

      // Capture the element with html2canvas
      
      const canvas = await html2canvas(element, {
        width: 1200,
        height: 630,
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      })

      // Convert to JPG with 80% quality
      const dataURL = canvas.toDataURL('image/jpeg', 0.8)
      
      // Create download link
      const link = document.createElement('a')
      link.download = 'ai-interview-guide-og-image.jpg'
      link.href = dataURL
      
      // Trigger download
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
    } catch (error) {
      console.error('Error saving image:', error)
      alert('Error saving image. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-5">
      {/* Save Button */}
      <div className="mb-8">
        <button
          onClick={saveAsJPG}
          className="px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg shadow-lg hover:bg-brand-mid transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-mid focus:ring-opacity-50"
        >
          💾 Save as JPG (Quality 80%)
        </button>
      </div>

      {/* Canvas Container - Exact OG dimensions */}
      <div 
        ref={canvasRef}
        id="og-canvas"
        className="relative overflow-hidden border-2 border-gray-200"
        style={{ 
          width: '1200px', 
          height: '630px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Background with generated pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/og-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Overlay for content readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)'
          }}
        />
        
        {/* Decorative Tech Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top right accent */}
          <div 
            className="absolute rounded-full"
            style={{
              width: '200px',
              height: '200px',
              top: '-100px',
              right: '-100px',
              background: 'linear-gradient(135deg, rgba(60, 130, 193, 0.1), rgba(32, 58, 90, 0.1))'
            }}
          />
          
          {/* Bottom left accent */}
          <div 
            className="absolute rounded-full"
            style={{
              width: '150px',
              height: '150px',
              bottom: '-75px',
              left: '-75px',
              background: 'linear-gradient(135deg, rgba(191, 199, 207, 0.15), rgba(60, 130, 193, 0.1))'
            }}
          />
          
          {/* Small accent dots */}
          <div 
            className="absolute rounded-full"
            style={{
              width: '40px',
              height: '40px',
              top: '100px',
              left: '100px',
              background: 'rgba(60, 130, 193, 0.2)'
            }}
          />
          <div 
            className="absolute rounded-full"
            style={{
              width: '20px',
              height: '20px',
              top: '450px',
              right: '150px',
              background: 'rgba(32, 58, 90, 0.2)'
            }}
          />
        </div>
        
        {/* Main Content */}
        <div 
          className="relative z-10 h-full flex flex-col justify-center items-center text-center"
          style={{ padding: '80px 60px' }}
        >
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/android-chrome-192x192.png" 
              alt="AI Interview Guide" 
              className="rounded-2xl shadow-lg"
              style={{ 
                width: '96px', 
                height: '96px',
                filter: 'drop-shadow(0 10px 25px rgba(32, 58, 90, 0.2))'
              }}
            />
          </div>
          
          {/* Title */}
          <h1 
            className="font-extrabold text-brand-dark mb-6 leading-none"
            style={{ 
              fontSize: '46px',
              letterSpacing: '-0.025em',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Finally, AI Interview Questions
            <br />
            <span style={{ fontSize: '42px', color: '#3C82C1' }}>That Actually Predict Job Success</span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-brand-dark font-bold mb-8 max-w-4xl leading-tight"
            style={{ fontSize: '24px' }}
          >
            Stop Hiring AI Engineers Who Can't Build Production Systems
          </p>
          
          {/* Dual-benefit power statements */}
          <div className="flex gap-3 mb-6">
            <div 
              className="px-5 py-3 rounded-full font-black text-white shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                fontSize: '15px'
              }}
            >
              🎯 HIRE REAL AI TALENT
            </div>
            <div 
              className="px-5 py-3 rounded-full font-black text-white shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #059669, #047857)',
                fontSize: '15px'
              }}
            >
              💰 LAND 6-FIGURE OFFERS
            </div>
            <div 
              className="px-5 py-3 rounded-full font-black text-white shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                fontSize: '15px'
              }}
            >
              ⚡ END HIRING DISASTERS
            </div>
          </div>
          
          {/* Bottom dual-audience CTA */}
          <p 
            className="text-brand-dark font-bold max-w-4xl leading-tight mb-4"
            style={{ fontSize: '19px' }}
          >
            For Candidates: Master Real AI Skills • For Hiring Managers: Find Engineers Who Ship
          </p>
          
          {/* Site URL */}
          <div 
            className="px-8 py-3 rounded-full font-bold text-white shadow-lg"
            style={{ 
              background: 'linear-gradient(135deg, #3C82C1, #203A5A)',
              fontSize: '18px',
              letterSpacing: '0.5px'
            }}
          >
            aiproductengineerinterview.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default OGImage
