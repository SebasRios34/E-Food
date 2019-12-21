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
import DetalleProducto from './Components/DetalleProducto';
import './App.css';
import DataNew from './dataNew';
import {ContextProvider} from './Context';


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
          <Route path="/detalleProducto" component={DetalleProducto}></Route>
        </Switch>
        <ContextProvider/>
      </div>
    </body>
  );
}

export default App;
