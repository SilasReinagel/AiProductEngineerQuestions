// @ts-check
import React, { useEffect, useRef } from 'react'
import html2canvas from 'html2canvas'

/**
 * Story Format Image Component
 * 1080x1920px for Instagram/Facebook Stories, mobile-first
 */
function OGImageStory() {
  const canvasRef = useRef(null)

  useEffect(() => {
    document.title = 'AI Product Engineering Interview Guide - Story Format'
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
        height: 1920,
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      })

      const dataURL = canvas.toDataURL('image/jpeg', 0.8)
      const link = document.createElement('a')
      link.download = 'ai-interview-guide-story.jpg'
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
          💾 Save Story Format (1080x1920)
        </button>
      </div>

      <div 
        ref={canvasRef}
        className="relative overflow-hidden"
        style={{ 
          width: '1080px', 
          height: '1920px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Brand gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #203A5A 0%, #3C82C1 50%, #BFC7CF 100%)'
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
        
        {/* Accent elements for vertical format */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute rounded-full"
            style={{
              width: '400px',
              height: '400px',
              top: '-200px',
              right: '-200px',
              background: 'radial-gradient(circle, rgba(191, 199, 207, 0.2), rgba(191, 199, 207, 0.05))',
              filter: 'blur(3px)'
            }}
          />
          <div 
            className="absolute rounded-full"
            style={{
              width: '300px',
              height: '300px',
              bottom: '-150px',
              left: '-150px',
              background: 'radial-gradient(circle, rgba(60, 130, 193, 0.15), rgba(60, 130, 193, 0.05))',
              filter: 'blur(3px)'
            }}
          />
        </div>
        
        {/* Main Content - Vertical story format */}
        <div 
          className="relative z-10 h-full flex flex-col justify-center items-center text-center"
          style={{ padding: '120px 80px' }}
        >
          <div className="mb-16">
            <img 
              src="/android-chrome-192x192.png" 
              alt="AI Interview Guide" 
              className="rounded-3xl shadow-lg"
              style={{ 
                width: '180px', 
                height: '180px',
                filter: 'drop-shadow(0 20px 40px rgba(32, 58, 90, 0.3))'
              }}
            />
          </div>
          
          {/* Vertical-optimized headline */}
          <h1 
            className="font-bold text-white mb-12 leading-tight"
            style={{ 
              fontSize: '72px',
              letterSpacing: '-0.02em',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}
          >
            THE
            <br />
            <span style={{ 
              fontSize: '68px', 
              color: '#BFC7CF',
              fontWeight: '800'
            }}>
              AI
            </span>
            <br />
            <span style={{ 
              fontSize: '64px', 
              color: '#BFC7CF',
              fontWeight: '800'
            }}>
              INTERVIEW
            </span>
            <br />
            <span style={{ 
              fontSize: '60px', 
              color: '#BFC7CF',
              fontWeight: '800'
            }}>
              QUESTIONS
            </span>
            <br />
            <span style={{ fontSize: '56px', color: '#ffffff', fontWeight: '900' }}>
              THAT
            </span>
            <br />
            <span style={{ fontSize: '56px', color: '#ffffff', fontWeight: '900' }}>
              ACTUALLY
            </span>
            <br />
            <span style={{ fontSize: '56px', color: '#ffffff', fontWeight: '900' }}>
              WORK
            </span>
          </h1>
          
          <p 
            className="text-gray-100 font-semibold mb-16 max-w-3xl leading-snug"
            style={{ fontSize: '32px' }}
          >
            Hire Engineers
            <br />
            Who Ship
            <br />
            <br />
            Land Roles at
            <br />
            Top AI Companies
          </p>
          
          <div 
            className="px-12 py-6 rounded-2xl font-bold text-white shadow-xl mb-16"
            style={{ 
              background: 'linear-gradient(135deg, rgba(32, 58, 90, 0.9), rgba(60, 130, 193, 0.8))',
              fontSize: '22px',
              letterSpacing: '0.5px',
              border: '2px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            🏆 Questions from
            <br />
            OpenAI • Anthropic
            <br />
            Google AI Engineers
          </div>
          
          <div 
            className="px-12 py-6 rounded-full font-bold text-white shadow-2xl"
            style={{ 
              background: 'linear-gradient(135deg, #3C82C1, #203A5A)',
              fontSize: '24px',
              letterSpacing: '0.5px',
              border: '3px solid rgba(255,255,255,0.3)'
            }}
          >
            👉 BROWSE FREE
            <br />
            aiproductengineerinterview.com
          </div>
        </div>
      </div>
    </div>
  )
}

export default OGImageStory
