import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Bienvenida from './Components/Bienvenida';
import Carrito from './Components/Carrito';
import Producto from './Components/Producto';
import Nav from './Components/Nav';
import Pedido from './Components/Pedido';
import Productos from './Components/Productos';
import Checkout from './Components/Checkout';
import './App.css';


function App() {
  return (
    <body>
      <div className="App">
        <Nav/>
        <Pedido/>
        <Switch>
          <Route exact path="/" component={Bienvenida}></Route>
          <Route path="/carrito" component={Carrito}></Route>
          <Route path="/producto" component={Producto}></Route>
          <Route path="/productos" component={Productos}></Route>
          <Route path="/checkout" component={Checkout}></Route>
        </Switch>
      </div>
    </body>
  );
}

export default App;
