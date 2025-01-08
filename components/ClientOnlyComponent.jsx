import dynamic from 'next/dynamic'

const ClientOnlyComponent = dynamic(() => import('./YourComponent'), {
  ssr: false,
}) 