
// import Footer from './component/Footer';
// import Header from './component/Header';
// import Contact from './component/Contact';
// import Hero from './component/Hero';

const App = () => {

  let marks = 80;
  return (
    <div>
      {/* <h1>Welcome to My React App</h1>
      <input type="text" placeholder="enter your name" />
      <button>submit</button> */}


      {/* <h2 style={
        {
        color: 'red',
        }
      }>hello react</h2>

      <h2>{new Date().getTime()}</h2> */}

      {/* if and else use */}

      {
        marks >80 ? <h1>Your result  is greater then {marks}</h1>
        : <h1>your result is less then  {marks}</h1>
      }


      {/* <Header />
      <Footer />
      <Contact />
      <Hero /> */}

    </div>
  );
};

export default App;
