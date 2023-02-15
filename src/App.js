import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Produtos from './pages/Produtos';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting="Mauro"/>} />
          <Route exact path='/category/:category' element={<Produtos />} />
          <Route exact path='/produtos/:id' element={<ItemDetailContainer />} />
          <Route exact path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
