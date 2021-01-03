import React from 'react'

type Props = {
  title: string,
  isActive?: boolean,
  type3?: Array<string>,
  type4?: string[]
}

export const Head = ({ title, isActive = true }: Props) => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}
