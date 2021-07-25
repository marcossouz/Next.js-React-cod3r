import { useRouter } from "next/dist/client/router"

export default function params() {
  const router = useRouter()

  console.log(router)

  const id = router.query.id
  const nome = router.query.nome

  return (
    <div>
      <h1>Rotas Params: {id} - {nome}</h1>
    </div>
  )
}