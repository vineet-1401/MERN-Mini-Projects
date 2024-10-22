import './App.css'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Cart from './components/Cart.jsx';
function App() {

  return (
    
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
    
  )
}

export default App
