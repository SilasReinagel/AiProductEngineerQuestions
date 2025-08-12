// @ts-check
import React, { useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'

/**
 * Open Graph Image V2 Component
 * High-impact, scroll-stopping design for social media
 */
function OGImageV2() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Set page title
    document.title = 'AI Product Engineering Interview Guide - OG Image V2'
    
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
      link.download = 'ai-interview-guide-og-image-v2.jpg'
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
          💾 Save V2 as JPG (Quality 80%)
        </button>
      </div>

      {/* Canvas Container - Exact OG dimensions */}
      <div 
        ref={canvasRef}
        id="og-canvas-v2"
        className="relative overflow-hidden"
        style={{ 
          width: '1200px', 
          height: '630px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* High-contrast dark background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%)'
          }}
        />
        
        {/* Energetic background pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/og-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* High-energy accent elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Bright accent circles */}
          <div 
            className="absolute rounded-full"
            style={{
              width: '300px',
              height: '300px',
              top: '-150px',
              right: '-150px',
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1))',
              filter: 'blur(1px)'
            }}
          />
          
          <div 
            className="absolute rounded-full"
            style={{
              width: '200px',
              height: '200px',
              bottom: '-100px',
              left: '-100px',
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3), rgba(34, 197, 94, 0.1))',
              filter: 'blur(1px)'
            }}
          />
          
          {/* Lightning bolt accent */}
          <div 
            className="absolute"
            style={{
              top: '80px',
              right: '100px',
              fontSize: '80px',
              opacity: '0.1',
              transform: 'rotate(15deg)'
            }}
          >
            ⚡
          </div>
        </div>
        
        {/* Main Content */}
        <div 
          className="relative z-10 h-full flex flex-col justify-center items-center text-center"
          style={{ padding: '40px 30px' }}
        >
          {/* Compact Logo */}
          <div className="mb-4">
            <img 
              src="/android-chrome-192x192.png" 
              alt="AI Interview Guide" 
              className="rounded-2xl shadow-2xl"
              style={{ 
                width: '80px', 
                height: '80px',
                filter: 'drop-shadow(0 10px 25px rgba(59, 130, 246, 0.4))'
              }}
            />
          </div>
          
          {/* Power Headline - Compact */}
          <h1 
            className="font-black text-white mb-4 leading-none"
            style={{ 
              fontSize: '48px',
              letterSpacing: '-0.03em',
              textShadow: '0 4px 8px rgba(0,0,0,0.5)'
            }}
          >
            THE AI INTERVIEW
            <br />
            <span style={{ 
              fontSize: '44px', 
              background: 'linear-gradient(90deg, #3b82f6, #22c55e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              QUESTIONS
            </span>
            <br />
            <span style={{ fontSize: '40px', color: '#ef4444' }}>
              THAT ACTUALLY WORK
            </span>
          </h1>
          
          {/* Dual-audience benefit statement */}
          <p 
            className="text-gray-200 font-bold mb-6 max-w-4xl leading-tight"
            style={{ fontSize: '22px' }}
          >
            Hire Engineers Who Ship • Land Roles at Top AI Companies
          </p>
          
          {/* Credible social proof badge */}
          <div 
            className="px-8 py-3 rounded-full font-black text-white shadow-2xl mb-4"
            style={{ 
              background: 'linear-gradient(135deg, #ef4444, #dc2626)',
              fontSize: '15px',
              letterSpacing: '0.5px',
              border: '2px solid rgba(255,255,255,0.2)'
            }}
          >
            🏆 QUESTIONS FROM OPENAI • ANTHROPIC • GOOGLE AI ENGINEERS
          </div>
          
          {/* High-contrast urgency CTA */}
          <div 
            className="text-white font-bold max-w-4xl leading-tight mb-4"
            style={{ 
              fontSize: '18px',
              background: 'linear-gradient(135deg, #f59e0b, #d97706)',
              padding: '10px 20px',
              borderRadius: '12px',
              border: '2px solid rgba(255,255,255,0.3)'
            }}
          >
            🔥 Get The Edge Before Your Competition Does
          </div>
          
          {/* Action-oriented CTA */}
          <div 
            className="px-8 py-3 rounded-full font-black text-white shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              fontSize: '17px',
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

export default OGImageV2
