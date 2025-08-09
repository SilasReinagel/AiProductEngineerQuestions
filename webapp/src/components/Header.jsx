// @ts-check
import React, { useState } from 'react'

/**
 * Site Header Component
 * @param {Object} props
 * @param {boolean} props.showLanding
 * @param {() => void} props.onBackToLanding
 * @param {() => void} props.onShowAbout
 * @param {() => void} [props.onShowStartHere]
 */
function Header({ showLanding, onBackToLanding, onShowAbout, onShowStartHere }) {
  const [shareState, setShareState] = useState(/** @type {null | 'copied' | 'shared' | 'error'} */(null))

  const getShareUrl = () => {
    const shareUrl = new URL(window.location.href)
    shareUrl.searchParams.set('utm_source', 'header')
    shareUrl.searchParams.set('utm_medium', 'share')
    shareUrl.searchParams.set('utm_campaign', 'launch')
    return shareUrl.toString()
  }

  const handleShare = async () => {
    const url = getShareUrl()
    try {
      if (navigator.share) {
        await navigator.share({ url, title: 'AI Product Engineering Interview Guide' })
        setShareState('shared')
      } else if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url)
        setShareState('copied')
      } else {
        // Fallback: use a temporary textarea
        const textarea = document.createElement('textarea')
        textarea.value = url
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
        setShareState('copied')
      }
    } catch {
      setShareState('error')
    } finally {
      setTimeout(() => setShareState(null), 1800)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-20 h-16 sm:h-20 backdrop-blur bg-white/90 border-b border-brand-light/40">
      <div className="mx-auto h-full w-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Brand */}
          <div onClick={onBackToLanding} role="link" aria-label="Go to homepage" className="flex items-center cursor-pointer select-none min-w-0 flex-1 mr-3 sm:justify-start justify-center">
            <img src="/android-chrome-192x192.png" alt="AI Interview Guide" className="h-8 w-8 sm:h-10 sm:w-10 mr-3 flex-shrink-0" />
            <div className="text-left min-w-0">
              <div className="font-serif text-brand-dark leading-tight">
                <span className="sm:hidden text-base font-semibold w-full">AI Product Engineer<br/>Interview Guide</span>
                <span className="hidden sm:inline text-lg lg:text-xl">AI Product Engineering Interview Guide</span>
              </div>
              <div className="text-[11px] lg:text-xs text-gray-400 mt-0.5 hidden sm:block">
                Essential Questions for AI Engineering Candidates, Hiring Managers, and Skill Development
              </div>
            </div>
          </div>

          {/* Actions */}
          <nav className="flex items-center space-x-2 flex-shrink-0">

            {/* Desktop: All buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Start Here */}
              {onShowStartHere && (
                <button
                  onClick={onShowStartHere}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 shadow-sm hover:bg-emerald-100 hover:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
                  title="Start Here Guide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>Start Here</span>
                </button>
              )}
              
              {/* About */}
              <button
                onClick={onShowAbout}
                className="inline-flex items-center gap-2 rounded-full border border-brand-light/60 bg-white px-3 py-2 text-sm text-brand-dark shadow-sm hover:bg-gray-50 hover:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-mid/60"
                title="About / Methodology"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="h-4 w-4 text-gray-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25v5.25m0-8.25h.008v.008H11.25V8.25ZM21 12a9 9 0 11-18 0 9 9 0 0118 0Z" />
                </svg>
                <span>About</span>
              </button>

              {/* GitHub */}
              <a
                href="https://github.com/SilasReinagel/AiProductEngineerQuestions"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
                className="inline-flex items-center gap-2 rounded-full border border-brand-light/60 bg-white px-3 py-2 text-sm text-brand-dark shadow-sm hover:bg-gray-50 hover:border-brand-light focus:outline-none focus:ring-2 focus:ring-brand-mid/60"
              >
                <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/>
                </svg>
                <span>GitHub</span>
              </a>

              {/* Share */}
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-3 py-2 text-sm text-white shadow-sm hover:bg-brand-mid focus:outline-none focus:ring-2 focus:ring-brand-mid/60"
                title="Share / Copy link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h6.75M7.5 12h6.75M7.5 15.75h6.75M15.75 5.25H18a1.5 1.5 0 011.5 1.5V18a1.5 1.5 0 01-1.5 1.5H8.25A1.5 1.5 0 016.75 18V5.25A1.5 1.5 0 018.25 3.75H12"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75H18v5.25" />
                </svg>
                <span>Share</span>
              </button>
            </div>

            {/* Share feedback chip */}
            {shareState && (
              <span className={`hidden sm:inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                shareState === 'error' ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'
              }`}>
                {shareState === 'error' ? 'Error' : shareState === 'shared' ? 'Shared' : 'Copied!'}
              </span>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 