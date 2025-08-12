// @ts-check
import React, { useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'

/**
 * Twitter Card Image Component
 * 1200x675px optimized for Twitter engagement
 */
function OGImageTwitter() {
  const canvasRef = useRef(null)

  useEffect(() => {
    document.title = 'AI Product Engineering Interview Guide - Twitter Card'
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
        width: 1200,
        height: 675,
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      })

      const dataURL = canvas.toDataURL('image/jpeg', 0.8)
      const link = document.createElement('a')
      link.download = 'ai-interview-guide-twitter-card.jpg'
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
          💾 Save Twitter Card (1200x675)
        </button>
      </div>

      <div 
        ref={canvasRef}
        className="relative overflow-hidden"
        style={{ 
          width: '1200px', 
          height: '675px',
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
        
        {/* Accent elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute rounded-full"
            style={{
              width: '200px',
              height: '200px',
              top: '-100px',
              right: '-100px',
              background: 'radial-gradient(circle, rgba(191, 199, 207, 0.2), rgba(191, 199, 207, 0.05))',
              filter: 'blur(2px)'
            }}
          />
        </div>
        
        {/* Main Content - Taller format */}
        <div 
          className="relative z-10 h-full flex flex-col justify-center items-center text-center"
          style={{ padding: '50px 40px' }}
        >
          <div className="mb-6">
            <img 
              src="/android-chrome-192x192.png" 
              alt="AI Interview Guide" 
              className="rounded-2xl shadow-lg"
              style={{ 
                width: '120px', 
                height: '120px',
                filter: 'drop-shadow(0 12px 30px rgba(32, 58, 90, 0.3))'
              }}
            />
          </div>
          
          {/* Larger headline for Twitter */}
          <h1 
            className="font-bold text-white mb-6 leading-tight"
            style={{ 
              fontSize: '58px',
              letterSpacing: '-0.02em',
              textShadow: '0 3px 6px rgba(0,0,0,0.3)'
            }}
          >
            THE AI INTERVIEW
            <br />
            <span style={{ 
              fontSize: '54px', 
              color: '#BFC7CF',
              fontWeight: '800'
            }}>
              QUESTIONS
            </span>
            <br />
            <span style={{ fontSize: '50px', color: '#ffffff', fontWeight: '900' }}>
              THAT ACTUALLY WORK
            </span>
          </h1>
          
          <p 
            className="text-gray-100 font-semibold mb-8 max-w-4xl leading-snug"
            style={{ fontSize: '28px' }}
          >
            Hire Engineers Who Ship • Land Roles at Top AI Companies
          </p>
          
          <div 
            className="px-12 py-5 rounded-2xl font-bold text-white shadow-xl mb-8"
            style={{ 
              background: 'linear-gradient(135deg, rgba(32, 58, 90, 0.9), rgba(60, 130, 193, 0.8))',
              fontSize: '18px',
              letterSpacing: '0.5px',
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            🏆 Questions from OpenAI • Anthropic • Google AI Engineers
          </div>
          
          <div 
            className="px-14 py-5 rounded-full font-bold text-white shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, #3C82C1, #203A5A)',
              fontSize: '24px',
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

export default OGImageTwitter
