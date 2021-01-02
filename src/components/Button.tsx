import React from 'react'

type Props = {
  onClick: (text: string) => void
}

export const Button = ({ onClick }: Props) => {
  return (
    <button onClick={() => onClick("hi")}>
      Booten
    </button>
  )
}
