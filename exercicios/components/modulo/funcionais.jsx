export function Comp1() {
  return <h2>Comp #01</h2>
}

export const Comp2 = function () {
  return <h2>Comp #02</h2>
}

export function Comp3() {
  return <h2>Comp #03</h2>
}

export const Comp4 = props => {
  return <h2>Comp #04</h2>
}

const Comp5 = () => <h2>Comp #05</h2>

const Comp6 = () => (
  <div>
    <h2>Comp #06</h2>
  </div>
)

export default () => (
  <div>
    <h2>Comp #07</h2>
  </div>
)

export const Comp8 = props => (
  <div>
    <h2>Comp #08 {props.msg}</h2>
  </div>
)

export {
  Comp5, Comp6
}