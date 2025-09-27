'use client'

import React, { useState, useEffect, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const ScrollScaleComponent = ({ children }: Props) => {
  const [scale, setScale] = useState(1)
  const [isActiveBreakpoint, setIsActiveBreakpoint] = useState(false)

  useEffect(() => {
    const checkBreakpoint = () => {
      const screenWidth = window.innerWidth
      setIsActiveBreakpoint(screenWidth >= 768 && screenWidth < 1920)
    }

    const handleScroll = () => {
      if (!isActiveBreakpoint) return

      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      // Вычисляем прогресс прокрутки (0 до 1)
      const scrollProgress = Math.min(scrollY / viewportHeight, 1)

      // Масштаб от 1 до 0.5
      const newScale = 1 - scrollProgress * 0.05
      setScale(newScale)
    }

    // Проверяем брейкпоинт при загрузке и ресайзе
    checkBreakpoint()
    window.addEventListener('resize', checkBreakpoint)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', checkBreakpoint)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isActiveBreakpoint])

  return (
    <div
      className='transition-transform duration-100 ease-out md:block '
      style={{
        transform: `scale(${scale})`,
        opacity: scale ** 6,
        // Отключаем трансформацию вне брейкпоинтов
        transformOrigin: 'center top'
      }}
    >
      {children}
    </div>
  )
}

export default ScrollScaleComponent
