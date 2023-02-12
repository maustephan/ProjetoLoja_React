import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting="Mauro"/>} />
          <Route exact path='/*' element={<h1>página não encontrada</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
