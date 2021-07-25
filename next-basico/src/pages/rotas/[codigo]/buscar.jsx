import { useRouter } from "next/dist/client/router"
import Link from 'next/link'

export default function buscar() {
  const router = useRouter()
  const codigo = router.query.codigo
  
  return (
    <div>
      <h1>Rotas / {codigo} / buscar!!!</h1>
      <Link href="/rotas">
        <button>Voltar</button>
      </Link>
    </div>
  )
}