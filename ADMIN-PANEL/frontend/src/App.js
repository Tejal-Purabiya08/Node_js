import { Route, Routes } from 'react-router-dom';
import './App.css';
import CategoryList from './comp/CategoryList';
import Product from './comp/Product';
function App() {

  return (
   <>
    <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/category/:categoryId' element={<CategoryList/>}/>
    </Routes>
   </>
  );
}

export default App;