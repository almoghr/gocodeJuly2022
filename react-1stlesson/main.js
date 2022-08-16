//const SimpleButton = React.createElement('div', {onClick: () => alert('Hi!!')},'<button>click me</button>');

// const NirHemo = () => {
//   return (
//     <div>
//       <button className="" onClick={() => alert("hi")}>click me!</button>
//       <button onClick={() => alert("shalom")}>click me 2</button>
//       <a href={"https://www.google.com"}>djaskhgh</a>
//     </div>
//   )
// }

const NumbersList = () => {

  console.log("shalom")

  const numbers = [1,2,3,4,5,6,7,8,9,10] 
  const names = ["mendy", "ilor", "maayan", "adi", "almog", "moshe", "asher"]
  const listItems = numbers.map((number) => <button onClick={() => alert(number)}>{number}</button>)
  const listItems2 = names.map((name) => <button onClick={() => alert(name)}>{name}</button>)

  // const button = <button>{numbers[4] * numbers [7]}</button>

  console.log(listItems)
  return (
    // <div>
    //   {button}
    // </div>
    <ul>
      {listItems}
      {listItems2}
      
    </ul>
  )
}
ReactDOM.render(<NumbersList />, document.getElementById('app'))