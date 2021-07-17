export default function lista() {
  function geraLista(final = 10) {
    lista = []

    for(let i = 1; i <=final; i++) {
      lista.push(<span>{i},</span>)
    }

    return lista
  }
  
  return (
    <div>
      <div>
        {geraLista()}
      </div>
      <div>
        {geraLista(3)}
      </div>
      <div>
        {geraLista(14)}
      </div>
    </div>
  )
}