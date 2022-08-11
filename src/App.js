import React from 'react';
// import FormRegistrasi from './FormRegistrasi';
// import Lifecycle from './Lifecycle';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rendering from './Rendering';
import {BrowserRouter as Router} from 'react-router-dom'
// import Hooks from './Hooks';
// import Bootstrap from './Bootstrap';

function App() {
  return (
    <Router>
    <div className="App" >
      <Rendering />
    </div>
    </Router>
  );
}

export default App;