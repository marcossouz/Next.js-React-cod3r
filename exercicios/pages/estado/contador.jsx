import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

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
      <ContadorDisplay numero={valor} />
      <div>
        <button onClick={() => setValor(valor - 1)}>-</button>
        <button onClick={() => setValor(valor + 1)}>+</button>
      </div>
    </div>
  )
}