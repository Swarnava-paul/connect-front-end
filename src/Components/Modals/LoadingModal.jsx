import React from 'react'
import { useSelector } from 'react-redux'

const LoadingModal = () => {
  const { isLoading } = useSelector((state) => state.loading)

  if (!isLoading) return null

  return (
    <div>
      <div>Loading...</div>
    </div>
  )
}

export default LoadingModal