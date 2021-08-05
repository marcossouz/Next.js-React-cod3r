import styles from '../styles/Cartao.module.css'

interface CartaoProps {
  bgColor?: String,
  children?: any
}

export default function Cartao(props: CartaoProps) {
  return (
    <div className={styles.cartao}
      style={{ 
        backgroundColor: props.bgColor ?? "#fff"
       }}
    >
      {props.children}
    </div>
  )
}