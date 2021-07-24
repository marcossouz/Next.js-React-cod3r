import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho(props) {
  return (
    <Lista>
      <Item conteudo={'Item #01'} />
      <Item conteudo={'Item #02'} />
      <Item conteudo={'Item #03'} />
      <Item conteudo={'Item #04'} />
      <Item conteudo={'Item #05'} />
      <Item conteudo={'Item #06'} />
    </Lista>
  )
}
