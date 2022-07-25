// import Makan from './makan';
import React from 'react';

const Intro = () => {
  return (
    <div>
      <h2>Masukkan Nama Anda : </h2>
    </div>
  )
}


function App() {
  return (
    <div className="App" >
      <Intro />
      <input></input>
      <button onClick={"Sangaji"}>Submit</button>
    </div>
  );
}

export default App;