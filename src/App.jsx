

const App = () => {

  const status = true;

  switch (status) {
    case true:
      return <button>login</button>
    case false: 
      return <button>logout</button>
      default:
        return null
  }

}

export default App