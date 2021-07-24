import Filho from "./Filho";

export default function Pai(props) {

  function falouComigo(param, param2, param3) {
    console.log(param, param2, param3)
    console.log('Alguem falou comigo!')
  }

  return (
    <div>
      <Filho funcao={falouComigo} />
    </div>
  )
}
