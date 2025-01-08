'use client'

import dynamic from 'next/dynamic'

const Toast = dynamic(() => import('./ToastComponent'), {
  ssr: false
})

export default Toast 