
import Footer from './component/Footer';
import Header from './component/Header';
import Contact from './component/Contact';
import Hero from './component/Hero';

const App = () => {
  return (
    <div>
      {/* <h1>Welcome to My React App</h1>
      <input type="text" placeholder="enter your name" />
      <button>submit</button> */}
      <h2 style={
        {
        color: 'red',
        }
      }>hello react</h2>

      <h2>{new Date().getTime()}</h2>

      {/* <Header />
      <Footer />
      <Contact />
      <Hero /> */}

    </div>
  );
};

export default App;
