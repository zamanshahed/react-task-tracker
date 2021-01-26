import React from 'react'
import Header from './components/Header'

//function based :
//------------------
// function App() {
//   const name = 'Sumon'
//   const flag = 0
//   return (
//     <div className="container">
//       <h1>Hello {name}, from REACT {15.3+2} (APP.js)</h1>
//       <h2>{flag? "Green Light": "Red Light"}</h2>
//       <Header/>
//     </div>
//   );
// }

//class based:
//------------------
class App extends React.Component{
  render(){
    return <h1>Hello from React Class!</h1>
  }
}
export default App;
