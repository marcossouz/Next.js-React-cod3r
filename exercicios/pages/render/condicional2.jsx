import If from '../../components/If'

export default function condicional2() {
  const numero = 5

  return (
    <div>
      <If teste={numero % 2 === 0}>
        <h1>O numero é Par</h1>
      </If>
      <If teste={numero % 2 === 1}>
        <h1>O numero é Impar</h1>
      </If>
    </div>
  )
}