import { useEffect, useState } from 'react'

function YourComponent() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleCopy = async () => {
    if (typeof navigator !== 'undefined') {
      try {
        await navigator.clipboard.writeText(textToCopy)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }
  }

  // Only render clipboard functionality on client side
  if (!isMounted) {
    return null // or a loading state
  }

  return (
    // Your component JSX
  )
} 