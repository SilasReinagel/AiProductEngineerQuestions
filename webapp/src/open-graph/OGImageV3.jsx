// @ts-check
import React, { useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'

/**
 * Open Graph Image V3 Component
 * Professional brand-aligned design with proven V2 messaging
 */
function OGImageV3() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Set page title
    document.title = 'AI Product Engineering Interview Guide - OG Image V3'
    
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
      link.download = 'ai-interview-guide-og-image-v3.jpg'
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
      {/* Navigation & Save Buttons */}
      <div className="mb-8 flex flex-col items-center gap-4">
        {/* Save Button */}
        <button
          onClick={saveAsJPG}
          className="px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg shadow-lg hover:bg-brand-mid transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-mid focus:ring-opacity-50"
        >
          💾 Save V3 as JPG (Quality 80%)
        </button>
        
        {/* Dimension Navigation */}
        <div className="flex flex-wrap justify-center gap-3">
          <a 
            href="/og-image-v3" 
            className="px-4 py-2 bg-brand-mid text-white font-medium rounded-lg shadow hover:bg-brand-dark transition-colors"
          >
            📐 Standard (1200x630)
          </a>
          <a 
            href="/og-image-twitter" 
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition-colors"
          >
            🐦 Twitter (1200x675)
          </a>
          <a 
            href="/og-image-square" 
            className="px-4 py-2 bg-purple-500 text-white font-medium rounded-lg shadow hover:bg-purple-600 transition-colors"
          >
            ⬜ Square (1080x1080)
          </a>
          <a 
            href="/og-image-story" 
            className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition-colors"
          >
            📱 Story (1080x1920)
          </a>
        </div>
        
        {/* Version Navigation */}
        <div className="flex gap-2 text-sm">
          <a 
            href="/og-image" 
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
          >
            V1
          </a>
          <a 
            href="/og-image-v2" 
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
          >
            V2
          </a>
          <span className="px-3 py-1 bg-brand-dark text-white rounded font-medium">
            V3 ←
          </span>
        </div>
      </div>

      {/* Canvas Container - Exact OG dimensions */}
      <div 
        ref={canvasRef}
        id="og-canvas-v3"
        className="relative overflow-hidden"
        style={{ 
          width: '1200px', 
          height: '630px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Professional brand gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #203A5A 0%, #3C82C1 50%, #BFC7CF 100%)'
          }}
        />
        
        {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('/og-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Elegant accent elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle brand accent circles */}
          <div 
            className="absolute rounded-full"
            style={{
              width: '250px',
              height: '250px',
              top: '-125px',
              right: '-125px',
              background: 'radial-gradient(circle, rgba(191, 199, 207, 0.2), rgba(191, 199, 207, 0.05))',
              filter: 'blur(2px)'
            }}
          />
          
          <div 
            className="absolute rounded-full"
            style={{
              width: '180px',
              height: '180px',
              bottom: '-90px',
              left: '-90px',
              background: 'radial-gradient(circle, rgba(60, 130, 193, 0.15), rgba(60, 130, 193, 0.05))',
              filter: 'blur(2px)'
            }}
          />
          
          {/* Subtle geometric accent */}
          <div 
            className="absolute"
            style={{
              top: '100px',
              right: '120px',
              width: '40px',
              height: '40px',
              background: 'rgba(191, 199, 207, 0.1)',
              borderRadius: '8px',
              transform: 'rotate(45deg)'
            }}
          />
        </div>
        
        {/* Main Content */}
        <div 
          className="relative z-10 h-full flex flex-col justify-center items-center text-center"
          style={{ padding: '45px 35px' }}
        >
          {/* Prominent Brand Logo */}
          <div className="mb-6">
            <img 
              src="/android-chrome-192x192.png" 
              alt="AI Interview Guide" 
              className="rounded-2xl shadow-lg"
              style={{ 
                width: '100px', 
                height: '100px',
                filter: 'drop-shadow(0 12px 30px rgba(32, 58, 90, 0.3))'
              }}
            />
          </div>
          
          {/* Professional Power Headline */}
          <h1 
            className="font-bold text-white mb-5 leading-tight"
            style={{ 
              fontSize: '50px',
              letterSpacing: '-0.02em',
              textShadow: '0 3px 6px rgba(0,0,0,0.3)'
            }}
          >
            THE AI INTERVIEW
            <br />
            <span style={{ 
              fontSize: '46px', 
              color: '#BFC7CF',
              fontWeight: '800'
            }}>
              QUESTIONS
            </span>
            <br />
            <span style={{ fontSize: '42px', color: '#ffffff', fontWeight: '900' }}>
              THAT ACTUALLY WORK
            </span>
          </h1>
          
          {/* Refined dual-audience benefit */}
          <p 
            className="text-gray-100 font-semibold mb-8 max-w-4xl leading-snug"
            style={{ fontSize: '24px' }}
          >
            Hire Engineers Who Ship • Land Roles at Top AI Companies
          </p>
          
          {/* Combined authority + urgency badge */}
          <div 
            className="px-10 py-4 rounded-2xl font-bold text-white shadow-xl mb-6"
            style={{ 
              background: 'linear-gradient(135deg, rgba(32, 58, 90, 0.9), rgba(60, 130, 193, 0.8))',
              fontSize: '16px',
              letterSpacing: '0.5px',
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            🏆 Questions from OpenAI • Anthropic • Google AI Engineers
            <br />
            <span style={{ fontSize: '14px', color: '#BFC7CF' }}>
              Get the edge before your competition does
            </span>
          </div>
          
          {/* Primary CTA - Brand aligned */}
          <div 
            className="px-12 py-4 rounded-full font-bold text-white shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, #3C82C1, #203A5A)',
              fontSize: '20px',
              letterSpacing: '0.5px',
              border: '3px solid rgba(255,255,255,0.3)'
            }}
          >
            👉 BROWSE FREE: aiproductengineerinterview.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default OGImageV3
