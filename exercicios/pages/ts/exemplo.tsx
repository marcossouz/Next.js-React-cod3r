import Pessoa from "../modulo/Pessoa"

export default function exemploTS() {
  return (
    <div>
      <Pessoa nome="João" idade={20} />
      <Pessoa nome="Maria"/>
    </div>
  )
}