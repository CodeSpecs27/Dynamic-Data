import React from 'react'

export const Header = ({heading, subHead}) => {
  return (
    <>
      <h1 className = "text-3xl font-bold text-center mb-2">{heading}</h1>
      <h2 className = "text-xl text-center mb-6">{subHead}</h2>
    </>
  )
}

