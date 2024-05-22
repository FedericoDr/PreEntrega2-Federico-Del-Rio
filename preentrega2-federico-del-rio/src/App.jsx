import './Styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBarX';
import HomeC from './Components/Home/HomeC';
import CateCarne from './Components/CateCarne/CategoriaCarne';
import CatePollo from './Components/CatePollo/CategoriaPollo';
import ProductosDetail from './Components/ProductsView/ProductosDetail'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route exact path='/' element={<HomeC/>}> </Route>
        <Route exact path='/Carne' element={<CateCarne/>}> </Route>
        <Route exact path='/Pollo' element={<CatePollo/>}> </Route>
        <Route exact path='/product/:prodId' element={<ProductosDetail/>}> </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

