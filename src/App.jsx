
// import Footer from './component/Footer';
// import Header from './component/Header';
// import Contact from './component/Contact';
// import Hero from './component/Hero';

const LoginStatusBtn= (status) => {
  if(status) {
    return <button>Logout</button>
  }else {
    return <button>Login</button>
  }
}

const App = () => {
  return (
    <div>
      <h1>login status </h1>
      {LoginStatusBtn(false)}
    </div>
  )
}

export default App;

// const App = () => {

//   // let status = true;
//   let status = false;

//   if(status == true) {

//       return (
 
//     <div>
//       <h1>Login Status</h1>
//       <button>Logout</button>
//     </div>
//   );
// }
//   else {
//     return (
//       <div>
//         <h1>login Status</h1>
//         <button>login</button>
//       </div>
//     )
//   }

//   }


// export default App;

