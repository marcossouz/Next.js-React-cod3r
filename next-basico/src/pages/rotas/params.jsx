import { useRouter } from "next/dist/client/router"
import Link from "next/dist/client/link"

export default function params() {
  const router = useRouter()

  // console.log(router)

  const id = router.query.id
  const nome = router.query.nome

  return (
    <div>
      <h1>Rotas Params: {id} - {nome}</h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  )
}