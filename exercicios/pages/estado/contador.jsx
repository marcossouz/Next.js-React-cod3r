import { useState } from "react"

export default function contador() {
  const [valor, setValor] = useState(0)

  return (
    <div>
      <h1>contador</h1>
      <div>valor: {valor}</div>
      <button onClick={() => setValor(valor - 1)}>-</button>
      <button onClick={() => setValor(valor + 1)}>+</button>
    </div>
  )
}