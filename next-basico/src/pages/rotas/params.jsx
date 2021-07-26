import {useRouter} from "next/router"
import Link from "next/link"

export default function Params() {
  const router = useRouter()

  // console.log(router)

  const id = router.query.id
  const nome = router.query.nome

  return (
    <div>
      <h1>Rotas Params: {id} - {nome}</h1>
      <Link href="/rotas" passHref>
        <button>Voltar</button>
      </Link>
    </div>
  )
}