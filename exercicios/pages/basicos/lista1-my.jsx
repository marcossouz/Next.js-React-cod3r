export default function lista1() {

  return (
    <div>
      {[...Array(10).keys()].map((x, idx) => {
        return <span key={idx}>{x + 1}, </span>
      })}
    </div>
  )
}

