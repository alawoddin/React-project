

const App = () => {

  const status = true;

  return (
    <div>
      {
        status ? 
        <button>login</button>
        : 
        <button>logout</button>
      }
    </div>
  )


}

export default App