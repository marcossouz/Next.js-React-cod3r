import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {
  const [valor, setValor] = useState(0)

  return (
    <div style={{
      display: "flex",
      alignContent: "center",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <h1>contador</h1>
      <NumeroDisplay numero={valor} />
      <div>
        <button onClick={() => setValor(valor - 1)}>-</button>
        <button onClick={() => setValor(valor + 1)}>+</button>
      </div>
    </div>
  )
}