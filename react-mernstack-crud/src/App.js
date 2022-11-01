import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
                  <Link to={"/create-products"} className="nav-link">
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
    </div>
  );
}

export default App;
