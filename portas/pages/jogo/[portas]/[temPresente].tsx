import Link from 'next/link'
import styles from '../../../styles/Jogo.module.css'
import { useEffect, useState } from "react"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import Porta from "../../../components/Porta"
import { useRouter } from 'next/router'

export default function jogo() {
  const router = useRouter()

  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState([])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    const qtdePortasValida = portas >= 3 && portas <= 100
    const qtdeTemPresente = temPresente >= 1 && temPresente <= portas
    setValido(qtdePortasValida && qtdeTemPresente)
  
  }, [portas]) 

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente
    setPortas(criarPortas(portas, temPresente))

  }, [router?.query]) 

  function renderizarPortas() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta}
        onChange={(novaPorta) => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        { valido 
          ? renderizarPortas()
          : <h2>Valores Inválidos</h2>}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}