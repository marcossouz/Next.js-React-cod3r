import { useState, useEffect } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"

export default function megasena() {

  const [qtde, setQtde] = useState(6)
  const [numeros, setNumeros] = useState([])

  useEffect(() => {
    setNumeros(mega(qtde))
  }, [])


  function renderNumeros() {
    return numeros.map(
      n => <NumeroDisplay key={n} numero={n}
      />)
  }
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h1>Mega Sena</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap"
      }}>{renderNumeros()}</div>
      <input type="number" min={6} max={20} value={qtde} onChange={(ev) => {
        if(+ev.target.value >= 6 && +ev.target.value <= 60) {
          setQtde(+ev.target.value)
        } else {
          setQtde(6)
        }
      }} />
      <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
    </div>
  )
}