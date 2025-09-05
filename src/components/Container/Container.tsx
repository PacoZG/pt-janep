import React from 'react'

const Container: React.FC<{
  className?: string
  children: React.ReactNode
}> = ({ className, children }) => (
  <div
    className={`mx-auto w-full max-w-7xl py-6 px-4 sm:px-6 lg:px-8 ${className}`}
  >
    {children}
  </div>
)

export default Container
