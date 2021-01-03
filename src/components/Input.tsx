import React, { useState, useRef } from 'react'

export const Input = () => {
  const [name, setName] = useState("") // infers string based on default value

  // read-only ref
  const ref = useRef<HTMLInputElement>(null)

  // null check without ?
  // if (ref && ref.current) {
  //   console.log("ref", ref.current.value)
  // }

  // null check w ?
  console.log("ref", ref?.current?.value)

  return (
    <input value={name} onChange={e => setName(e.target.value)} />
  )
}
