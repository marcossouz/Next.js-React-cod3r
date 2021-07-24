import { useState } from "react"

export default function mouse() {
  const [x, setX] = useState(0)
  
  const arrayY = useState(0)
  let y = arrayY[0]
  const setY = arrayY[1]

  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh"
  }

  function quandoMove(ev) {
    setX(ev.clientX)
    setY(ev.clientY)
  }

  return (
    <div style={estilo} onMouseMove={quandoMove}>
      <div>Eixo X: {x}</div>
      <div>Eixo Y: {y}</div>
    </div>
  )
}