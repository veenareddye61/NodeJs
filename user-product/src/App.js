import logo from './logo.svg';
import './App.css';
import Login from './Login/login';
import {Routes,Route} from 'react-router-dom';
import Products from './Login/products';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <Routes>
       <Route path='/Login' element={<Login/>}></Route>
        <Route path='' element={<Login/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
    </Routes>
     
    </div>
  );
}

export default App;
