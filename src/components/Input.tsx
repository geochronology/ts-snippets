import React, { useState } from 'react'

export const Input = () => {
  const [name, setName] = useState("") // infers string based on default value

  return (
    <input value={name} onChange={e => setName(e.target.value)} />
  )
}
