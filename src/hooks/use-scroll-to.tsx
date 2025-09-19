'use client'

export const useScrollTo = () => {
  const scrollToSection = (id: string) => {
    if (typeof window === 'undefined') return

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return { scrollToSection }
}
