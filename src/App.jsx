import { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Novidades from './components/Novidades/Novidades';
import Sobre from './components/Sobre/Sobre';

export default function App() {
  const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
  `;

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/novidades' element={<Novidades />}/>
          <Route path='/sobre' element={<Sobre />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}
