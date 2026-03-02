'use client'

import { useState } from 'react'
import Image from 'next/image'

interface FallbackImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  [key: string]: any
}

export default function FallbackImage({ 
  src, 
  alt, 
  fill = false, 
  width, 
  height, 
  className = "", 
  priority = false,
  ...props 
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc('/fallback-vehicle.svg')
    }
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      priority={priority}
      onError={handleError}
    />
  )
}
