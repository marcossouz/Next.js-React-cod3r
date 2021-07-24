export default function Filho(props) {

  return (
    <div>
      <h1>Filho</h1>
      <button onClick={props.funcao}>Falar com o pai #01</button>
      <button onClick={() => props.funcao("Passei no ENEM!", "Uhuu", 10)}>Falar com o pai #02</button>
    </div>
  )
}
