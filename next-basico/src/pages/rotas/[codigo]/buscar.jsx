import { useRouter } from "next/dist/client/router"

export default function buscar() {
  const router = useRouter()
  const codigo = router.query.codigo
  
  return (
    <div>
      <h1>Rotas / {codigo} / buscar!!!</h1>
    </div>
  )
}