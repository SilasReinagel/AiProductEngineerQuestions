// @ts-check
import React, { useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'

/**
 * Square Social Media Image Component
 * 1080x1080px for Instagram, Facebook posts, etc.
 */
function OGImageSquare() {
  const canvasRef = useRef(null)

  useEffect(() => {
    document.title = 'AI Product Engineering Interview Guide - Square Format'
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.background = 'white'
    
    return () => {
      document.body.style.margin = ''
      document.body.style.padding = ''
      document.body.style.background = ''
    }
  }, [])

  const saveAsJPG = async () => {
    try {
      const element = canvasRef.current
      if (!element) return

      const html2canvas = (await import('html2canvas')).default
      const canvas = await html2canvas(element, {
        width: 1080,
        height: 1080,
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      })

      const dataURL = canvas.toDataURL('image/jpeg', 0.8)
      const link = document.createElement('a')
      link.download = 'ai-interview-guide-square.jpg'
      link.href = dataURL
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
      <div className="mb-8">
        <button
          onClick={saveAsJPG}
          className="px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg shadow-lg hover:bg-brand-mid transition-colors duration-200"
        >
          💾 Save Square Format (1080x1080)
        </button>
      </div>

      <div 
        ref={canvasRef}
        className="relative overflow-hidden"
        style={{ 
          width: '1080px', 
          height: '1080px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Brand gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #203A5A 0%, #3C82C1 50%, #BFC7CF 100%)'
          }}
        />
        
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('/og-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Accent elements for square format */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute rounded-full"
            style={{
              width: '300px',
              height: '300px',
              top: '-150px',
              right: '-150px',
              background: 'radial-gradient(circle, rgba(191, 199, 207, 0.2), rgba(191, 199, 207, 0.05))',
              filter: 'blur(2px)'
            }}
          />
          <div 
            className="absolute rounded-full"
            style={{
              width: '250px',
              height: '250px',
              bottom: '-125px',
              left: '-125px',
              background: 'radial-gradient(circle, rgba(60, 130, 193, 0.15), rgba(60, 130, 193, 0.05))',
              filter: 'blur(2px)'
            }}
          />
        </div>
        
        {/* Main Content - Square format */}
        <div 
          className="relative z-10 h-full flex flex-col justify-center items-center text-center"
          style={{ padding: '80px 60px' }}
        >
          <div className="mb-10">
            <img 
              src="/android-chrome-192x192.png" 
              alt="AI Interview Guide" 
              className="rounded-3xl shadow-lg"
              style={{ 
                width: '140px', 
                height: '140px',
                filter: 'drop-shadow(0 15px 35px rgba(32, 58, 90, 0.3))'
              }}
            />
          </div>
          
          {/* Adjusted for square format */}
          <h1 
            className="font-bold text-white mb-8 leading-tight"
            style={{ 
              fontSize: '64px',
              letterSpacing: '-0.02em',
              textShadow: '0 3px 6px rgba(0,0,0,0.3)'
            }}
          >
            THE AI
            <br />
            <span style={{ 
              fontSize: '60px', 
              color: '#BFC7CF',
              fontWeight: '800'
            }}>
              INTERVIEW
            </span>
            <br />
            <span style={{ 
              fontSize: '56px', 
              color: '#BFC7CF',
              fontWeight: '800'
            }}>
              QUESTIONS
            </span>
            <br />
            <span style={{ fontSize: '52px', color: '#ffffff', fontWeight: '900' }}>
              THAT WORK
            </span>
          </h1>
          
          <p 
            className="text-gray-100 font-semibold mb-10 max-w-3xl leading-snug"
            style={{ fontSize: '26px' }}
          >
            Hire Engineers Who Ship
            <br />
            Land Roles at Top AI Companies
          </p>
          
          <div 
            className="px-10 py-5 rounded-2xl font-bold text-white shadow-xl mb-10"
            style={{ 
              background: 'linear-gradient(135deg, rgba(32, 58, 90, 0.9), rgba(60, 130, 193, 0.8))',
              fontSize: '18px',
              letterSpacing: '0.5px',
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            🏆 Questions from OpenAI
            <br />
            Anthropic • Google AI Engineers
          </div>
          
          <div 
            className="px-12 py-5 rounded-full font-bold text-white shadow-2xl"
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

export default OGImageSquare
