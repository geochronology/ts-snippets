import React, { useState, useRef } from 'react'

export const Input = () => {
  const [name, setName] = useState("") // infers string based on default value

  // read-only ref
  const ref = useRef<HTMLInputElement>(null)

  if (ref && ref.current) {
    console.log("ref", ref.current.value)
  }

  return (
    <input value={name} onChange={e => setName(e.target.value)} />
  )
}
