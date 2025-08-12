// @ts-check
import React, { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas'

/**
 * Unified OG Image Generator Component
 * All dimensions and versions in one component with inline switching
 */
function OGImageGenerator() {
  const canvasRef = useRef(null)
  const [currentDimension, setCurrentDimension] = useState('standard')
  const [currentVersion] = useState('v3') // Only V3 now

  useEffect(() => {
    document.title = 'AI Product Engineering Interview Guide - OG Image Generator'
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.background = 'white'
    
    return () => {
      document.body.style.margin = ''
      document.body.style.padding = ''
      document.body.style.background = ''
    }
  }, [])

  const dimensions = {
    standard: { width: 1200, height: 630, name: 'Standard OG', icon: '📐' },
    twitter: { width: 1200, height: 675, name: 'Twitter Card', icon: '🐦' },
    square: { width: 1080, height: 1080, name: 'Square Social', icon: '⬜' },
    story: { width: 1080, height: 1920, name: 'Story Format', icon: '📱' }
  }

  const currentDim = dimensions[currentDimension]

  /**
   * Saves the current OG image as JPG
   */
  const saveAsJPG = async () => {
    try {
      const element = canvasRef.current
      if (!element) return

      const canvas = await html2canvas(element, {
        width: currentDim.width,
        height: currentDim.height,
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      })

      const dataURL = canvas.toDataURL('image/jpeg', 0.8)
      const link = document.createElement('a')
      link.download = `ai-interview-guide-${currentDimension}-${currentVersion}.jpg`
      link.href = dataURL
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error saving image:', error)
      alert('Error saving image. Please try again.')
    }
  }

  /**
   * Renders the OG image content based on current dimension and version
   */
  const renderOGContent = () => {
    // Responsive sizing based on dimension
    const isStory = currentDimension === 'story'
    const isSquare = currentDimension === 'square'
    const isTwitter = currentDimension === 'twitter'
    
    // Dynamic sizing
    const logoSize = isStory ? 180 : isSquare ? 140 : isTwitter ? 120 : 100
    const headlineSize = isStory ? 72 : isSquare ? 68 : isTwitter ? 54 : 50
    const questionSize = isStory ? 68 : isSquare ? 64 : isTwitter ? 50 : 46
    const workSize = isStory ? 56 : isSquare ? 56 : isTwitter ? 46 : 42
    const subtitleSize = isStory ? 32 : isSquare ? 26 : isTwitter ? 26 : 24
    const badgeSize = isStory ? 22 : isSquare ? 18 : isTwitter ? 18 : 16
    const ctaSize = isStory ? 24 : isSquare ? 20 : isTwitter ? 24 : 20
    
    const padding = isStory ? '120px 80px' : isSquare ? '80px 60px' : isTwitter ? '50px 40px' : '45px 35px'
    const logoMargin = isStory ? 'mb-16' : isSquare ? 'mb-10' : isTwitter ? 'mb-6' : 'mb-6'
    const headlineMargin = isStory ? 'mb-12' : isSquare ? 'mb-8' : isTwitter ? 'mb-6' : 'mb-5'
    const subtitleMargin = isStory ? 'mb-16' : isSquare ? 'mb-10' : isTwitter ? 'mb-8' : 'mb-8'
    const badgeMargin = isStory ? 'mb-16' : isSquare ? 'mb-10' : isTwitter ? 'mb-8' : 'mb-6'

    return (
      <div 
        className="relative z-10 h-full flex flex-col justify-center items-center text-center"
        style={{ padding }}
      >
        {/* Logo */}
        <div className={logoMargin}>
          <img 
            src="/android-chrome-192x192.png" 
            alt="AI Interview Guide" 
            className={`rounded-${isStory ? '3xl' : '2xl'} shadow-lg`}
            style={{ 
              width: `${logoSize}px`, 
              height: `${logoSize}px`,
              filter: `drop-shadow(0 ${logoSize/8}px ${logoSize/4}px rgba(32, 58, 90, 0.3))`
            }}
          />
        </div>
        
        {/* Headline - Adaptive layout */}
        <h1 
          className={`font-bold text-white ${headlineMargin} leading-tight`}
          style={{ 
            fontSize: `${headlineSize}px`,
            letterSpacing: '-0.02em',
            textShadow: '0 3px 6px rgba(0,0,0,0.3)'
          }}
        >
          {isStory ? (
            <>
              THE<br />
              <span style={{ fontSize: `${questionSize}px`, color: '#BFC7CF', fontWeight: '800' }}>AI</span><br />
              <span style={{ fontSize: `${questionSize-4}px`, color: '#BFC7CF', fontWeight: '800' }}>INTERVIEW</span><br />
              <span style={{ fontSize: `${questionSize-8}px`, color: '#BFC7CF', fontWeight: '800' }}>QUESTIONS</span><br />
              <span style={{ fontSize: `${workSize}px`, color: '#ffffff', fontWeight: '900' }}>THAT</span><br />
              <span style={{ fontSize: `${workSize}px`, color: '#ffffff', fontWeight: '900' }}>ACTUALLY</span><br />
              <span style={{ fontSize: `${workSize}px`, color: '#ffffff', fontWeight: '900' }}>WORK</span>
            </>
          ) : isSquare ? (
            <>
              THE AI<br />
              <span style={{ fontSize: `${questionSize}px`, color: '#BFC7CF', fontWeight: '800' }}>INTERVIEW</span><br />
              <span style={{ fontSize: `${questionSize}px`, color: '#BFC7CF', fontWeight: '800' }}>QUESTIONS</span><br />
              <span style={{ fontSize: `${workSize}px`, color: '#ffffff', fontWeight: '900' }}>THAT WORK</span>
            </>
          ) : (
            <>
              THE AI INTERVIEW<br />
              <span style={{ fontSize: `${questionSize}px`, color: '#BFC7CF', fontWeight: '800' }}>QUESTIONS</span><br />
              <span style={{ fontSize: `${workSize}px`, color: '#ffffff', fontWeight: '900' }}>THAT ACTUALLY WORK</span>
            </>
          )}
        </h1>
        
        {/* Subtitle */}
        <p 
          className={`text-gray-100 font-semibold ${subtitleMargin} max-w-4xl leading-snug`}
          style={{ fontSize: `${subtitleSize}px` }}
        >
          {isStory ? (
            <>Hire Engineers<br />Who Ship<br /><br />Land Roles at<br />Top AI Companies</>
          ) : isSquare ? (
            <>Hire Engineers Who Ship<br />Land Roles at Top AI Companies</>
          ) : (
            'Hire Engineers Who Ship • Land Roles at Top AI Companies'
          )}
        </p>
        
        {/* Authority Badge */}
        <div 
          className={`px-10 py-4 rounded-2xl font-bold text-white shadow-xl ${badgeMargin}`}
          style={{ 
            background: 'linear-gradient(135deg, rgba(32, 58, 90, 0.9), rgba(60, 130, 193, 0.8))',
            fontSize: `${badgeSize}px`,
            letterSpacing: '0.5px',
            border: '2px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)'
          }}
        >
          {isStory ? (
            <>🏆 Questions from<br />OpenAI • Anthropic<br />Google AI Engineers</>
          ) : isSquare ? (
            <>🏆 Questions from OpenAI<br />Anthropic • Google AI Engineers</>
          ) : (
            <>🏆 Questions from OpenAI • Anthropic • Google AI Engineers<br />
            <span style={{ fontSize: `${badgeSize-2}px`, color: '#BFC7CF' }}>
              Get the edge before your competition does
            </span></>
          )}
        </div>
        
        {/* CTA Button */}
        <div 
          className="px-12 py-4 rounded-full font-bold text-white shadow-2xl"
          style={{ 
            background: 'linear-gradient(135deg, #3C82C1, #203A5A)',
            fontSize: `${ctaSize}px`,
            letterSpacing: '0.5px',
            border: '3px solid rgba(255,255,255,0.3)'
          }}
        >
          {isStory ? (
            <>👉 BROWSE FREE<br />aiproductengineerinterview.com</>
          ) : (
            '👉 BROWSE FREE: aiproductengineerinterview.com'
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-5">
      {/* Controls */}
      <div className="mb-8 flex flex-col items-center gap-4 max-w-4xl">
        {/* Save Button */}
        <button
          onClick={saveAsJPG}
          className="px-6 py-3 bg-brand-dark text-white font-semibold rounded-lg shadow-lg hover:bg-brand-mid transition-colors duration-200"
        >
          💾 Save {currentDim.name} ({currentDim.width}x{currentDim.height})
        </button>
        
        {/* Dimension Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {Object.entries(dimensions).map(([key, dim]) => (
            <button
              key={key}
              onClick={() => setCurrentDimension(key)}
              className={`px-4 py-2 font-medium rounded-lg shadow transition-colors ${
                currentDimension === key 
                  ? 'bg-brand-dark text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {dim.icon} {dim.name}
            </button>
          ))}
        </div>
        

      </div>

      {/* Canvas Container */}
      <div 
        ref={canvasRef}
        className="relative overflow-hidden"
        style={{ 
          width: `${currentDim.width}px`, 
          height: `${currentDim.height}px`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          // Remove max constraints that were causing rectangular display
          transform: currentDimension === 'story' ? 'scale(0.35)' : 
                    currentDimension === 'square' ? 'scale(0.5)' : 
                    currentDimension === 'twitter' ? 'scale(0.8)' :
                    'scale(0.8)',
          transformOrigin: 'center',
          // Ensure proper aspect ratio preservation
          aspectRatio: `${currentDim.width} / ${currentDim.height}`
        }}
      >
        {/* Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #203A5A 0%, #3C82C1 50%, #BFC7CF 100%)'
          }}
        />
        
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('/og-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        {/* Accent Elements */}
        <div className="absolute inset-0 pointer-events-none">
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
        </div>
        
        {/* Content */}
        {renderOGContent()}
      </div>
    </div>
  )
}

export default OGImageGenerator
