import { useState } from "react"

export default function estatico1() {

  const [num, setNum] = useState(Math.random())

  return (
    <div>
      <h1>Estatico #01 - Versão 2</h1>
      <h2>{num}</h2>
    </div>
  )
}