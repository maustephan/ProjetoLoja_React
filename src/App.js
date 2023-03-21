import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Produtos from './pages/Produtos';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import Footer from './components/Footer';

// const objetosAcesso = {
//   name: "Mauro",
//   itensAdicionados: ["processador","hd","microfone"],
//   pagamentoEfetuado: false,
//   logar: () => console.log("Função no contexto")
// };


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting="Mauro"/>} />
          <Route exact path='/category/:categoryId' element={<Produtos />} />
          <Route exact path='/produtos/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/*' element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
