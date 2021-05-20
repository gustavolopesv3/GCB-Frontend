import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import StylesGlobal from './styles/global'

function App() {
  return (
    <BrowserRouter>
    <Routes/>
    <StylesGlobal/>
    </BrowserRouter>
  );
}

export default App;
