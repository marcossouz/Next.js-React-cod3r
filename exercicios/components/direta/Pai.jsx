import Filho from "./Filho";

export default function Pai(props) {
  return <div>
    <h1>Família {props.familia}</h1>
    <Filho nome="Marcos" familia={props.familia} />
    <Filho nome="Elizania" familia={props.familia} />
    <Filho {...props} nome="Esdras"/>
  </div>
}
