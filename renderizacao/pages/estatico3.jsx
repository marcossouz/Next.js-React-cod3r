export function getStaticProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico3(props) {
  return (
    <div>
      <h1>Estatico #03</h1>
      <h2>{props.numero}</h2>
    </div>
  )
}