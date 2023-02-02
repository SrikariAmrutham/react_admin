import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Regreport from './Components/Regreport';
import Licreport from './Components/Licreport';
import Perreport from './Components/Perreport';
import Regapp from './Components/Regapp';
import Licapp from './Components/Licapp';
import Perapp from './Components/Perapp';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='Regapp' element={<Regapp/>}></Route>
        <Route path='Licapp' element={<Licapp/>}></Route>
        <Route path='Perapp' element={<Perapp/>}></Route>
        <Route path='Regreport' element={<Regreport/>}></Route>
        <Route path='Licreport' element={<Licreport/>}></Route>
        <Route path='Perreport' element={<Perreport/>}></Route>

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
