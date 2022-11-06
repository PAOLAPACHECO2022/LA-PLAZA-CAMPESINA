import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {  CDBBtn, CDBIcon, CDBBox } from 'cdbreact';//

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateProducts from "./components/create-products.component";
import EditProducts from "./components/edit-products.component";
import ProductsList from "./components/products-list.component";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="black" variant="dark">
            <Container>
            <Navbar.Brand>        
            
                <Link to={"/create-products"} className="nav-link">
                <img
                alt=""
                src="/laplaza.gif"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />{' '}            
                LA PLAZA CAMPESINA
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-products"} className="nav-link ">
                    Crear Producto
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/products-list"} className="nav-link">
                    Listar Producto
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch> 
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateProducts {...props} />}
                  />
                  <Route  // Se dirige a cada una de las rutas y precisa cual es cada una basada en las propiedades(switch) 
                    exact
                    path="/create-products"
                    component={(props) => <CreateProducts {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-products/:id"
                    component={(props) => <EditProducts {...props} />}
                  />
                  <Route
                    exact
                    path="/products-list"
                    component={(props) => <ProductsList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>

      </Router>

      <Router>
        <footer className="footer layout_padding bg-black pt-5 flex mt-5">
          <Navbar bg="black" variant="black">
            <Container>
            <div className="container-fluid  bg-black text-center text-md-left">
        <div className="row">
       
            <div className="col-lg-3 col-md-3 col-sm-2">
            <Link to={"/create-products"} className="nav-link">
                <img
                alt=""
                src="/laplaza.gif"
                width="110"
                height="110"
                className="d-inline-block align-top"
              />{' '}            
                LA PLAZA CAMPESINA
            </Link>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-2">
                <h5 className="text-uppercase">Contactenos</h5>
                <p>(+57) 3209887626</p>
                <p>laplaza.cm@gmail.com </p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-lg-3 col-md-3 col-sm-2">
                <h5 className="text-uppercase">Funciones</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Crear Producto</a></li>
                    <li><a href="#!">Listar Producto</a></li>
                    <li><a href="#!">Borrar producto</a></li>
                    <li><a href="#!">Editar producto</a></li>
                </ul>
            </div>{' '} 

          
            <div className="col-lg-3 col-md-3 col-sm-2">
                <h5 className="text-uppercase">Ultimas Noticias</h5>
                <ul className="list-unstyled">
                <p>
                <img
                alt=""
                src="https://i.pinimg.com/originals/28/30/84/283084d7c1d7c52ca6a67aa75624817d.jpg" 
                width="50"
                height="50"
                className="bg-warning form-wrapper rounded-4"
              />{' '}
              Frutas y Verduras- Alimentos perecederos
                  </p>
                  <p>
                <img
                alt=""
                src="https://i.pinimg.com/originals/a8/77/bd/a877bd50186346533f3d389fb59d2ca1.jpg"
                width="50"
                height="50"
                className="bg-warning form-wrapper rounded-4"
              />{' '}
              Alimentos no perecederos- Arroz, Frijol y más...
                  </p>
           
                </ul>
            </div>
        </div>
    </div>
    

    <CDBBox display="flex" className="mt-0" justifyContent="between">
          <small className="ml-2">&copy; Devwares, 2022. All rights reserved.</small>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>

  </Container>
</Navbar>

</footer>
</Router>
</div>
 

  );
}

export default App;
