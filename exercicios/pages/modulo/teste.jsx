import Padrao, { Comp1 as Blabla, Comp2, Comp3, Comp4, Comp5, Comp6, Comp8 } from '../../components/modulo/funcionais'

export default function teste() {
  return (
    <div>
      <Blabla />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
      <Comp6 />
      <Padrao />
      <Comp8 msg="Mensagem" />
    </div>
  )
}