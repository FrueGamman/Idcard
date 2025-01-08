import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove Grammarly attributes on mount
    const removeAttributes = () => {
      document.body.removeAttribute('data-new-gr-c-s-check-loaded')
      document.body.removeAttribute('data-gr-ext-installed')
    }
    
    removeAttributes()
    // Optional: Add mutation observer to prevent extensions from adding attributes
    const observer = new MutationObserver(removeAttributes)
    observer.observe(document.body, { attributes: true })

    return () => observer.disconnect()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp 