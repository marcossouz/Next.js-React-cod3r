import Contador from '../../components/Contador'
import { Component } from "react";



export default class ContadorPage extends Component {

  render() {
    return (
      <div>
        <h1>Teste Classe</h1>
        <Contador valorInicial={100} passo={37}/>
      </div>
    )
  }
}