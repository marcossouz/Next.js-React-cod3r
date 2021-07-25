import { Component } from "react";

class Contador extends Component {

  state = {
    numero: this.props.valorInicial ?? 0,
    passo: this.props.passo ?? 1
  }

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  alteraPasso = (ev) => {
    this.setState({ passo: +ev.target.value })
  }

  renderForm() {
    return (
      <>
        <input
          type="number" min={1} max={1000}
          value={this.state.passo}
          onChange={this.alteraPasso}
        />
        <button onClick={this.dec}>-</button>
        <button onClick={this.inc}>+</button>
      </>
    )
  }

  render() {
    return (
      <div>
        <h1>Contador (Usando Classe)</h1>
        <h3>{this.state.numero}</h3>
        {this.renderForm()}
      </div>
    )
  }
}

export default Contador