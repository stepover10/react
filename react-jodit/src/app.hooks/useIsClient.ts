import { useEffect, useState } from 'react'

const useIsClient = () => {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') setClient(true)
  }, [])

  return isClient
}

export default useIsClient