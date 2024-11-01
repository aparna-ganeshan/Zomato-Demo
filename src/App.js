import './App.css';
import BackgroundImage from './BackgroundImage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<BackgroundImage/>}/>
      <Route path='login' element = {<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
