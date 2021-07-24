
function acao1() {
  console.log("acao 01")
}

export default function botao() {

  function acao2() {
    console.log("acao 02")
  }

  function acao5(e) {
    console.log(e)
  }

  return (
    <div>
      <button onClick={acao1}>Click #01</button>
      <button onClick={acao2}>Click #02</button>
      <button onClick={function () {
        console.log("Acao 03")
      }}>Click #03</button>
      <button onClick={() => console.log("Acao 04")}>Click #04</button>
      <button onClick={acao5}>Click #05</button>
      <button onClick={e => acao5(e.altKey)}>Click #05 v2</button>
      <div>
        <input onChange={() => console.log("Mudou")} />
        <input onChange={e => console.log(e.target.value)} />
      </div>
    </div>
  )
}