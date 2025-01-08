import { useEffect, useState } from 'react'

function DynamicContent() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    // Update time only on client side
    setCurrentTime(new Date().toLocaleString())
  }, [])

  return <div>{currentTime}</div>
} 