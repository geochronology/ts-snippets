import React from 'react'

type Props = {
  title: string,
  isActive?: boolean
}

export const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
