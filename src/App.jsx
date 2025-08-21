
// import Footer from './component/Footer';
// import Header from './component/Header';
// import Contact from './component/Contact';
// import Hero from './component/Hero';

const App = () => {

  const city = ['farah' , 'kabul' , 'harat', 'mazar', 'jalalabad', 'kandahar'];
  return (
 
    <div>
      <ul>
        <li>
          {
            city.map((item,i)=>{
              return <li key={i.toString}>{item}</li>
            })
          }
        </li>
      </ul>

    </div>
  );
};

export default App;
