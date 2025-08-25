import { useRef } from "react"


const App = () => {
   let myHeadLine = useRef();

    const change = () => {
      myHeadLine.current.innerText = "hello world changed"
    }

  return (
    <div>
      <h1 ref={myHeadLine}>
        hello world 
      </h1>
      <button onClick={change}>click me</button>
    </div>
  )
}

export default App