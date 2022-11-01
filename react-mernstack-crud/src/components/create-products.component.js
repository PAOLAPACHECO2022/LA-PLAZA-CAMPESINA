import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreateProducts extends Component {
  render() {
    return (
      
    
      <div class="container d-flex justify-content-center aline-100 bg-warning form-wrapper rounded-4 " >
          

  <Form >
        <div to={"/create-products"} className="nav-link" >
            <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/2622/2622693.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{' '}            
            CREAR PRODUCTO
            </div>
   
      <Form.Group className="mb-1" controlId="formBasicName">        
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control type="nombre" placeholder="Ingrese el nombre del producto" />
      </Form.Group>

       <Form.Group className="mb-1" controlId="formBasicDescription">        
        <Form.Label>Descripción del Producto</Form.Label>
        <Form.Control type="description" placeholder="Ingrese la descripcion del producto" />
        <Form.Text className="text-muted">
        El producto debe quedar registrado con un nombre real y único, ya que
        podrá ser más fácil su ubicación por otros usuarios. Para la creación de un producto se debe
        tener en cuenta el, Nombre del producto, Descripción del producto (Tipo de producto,
         Calidad/Estado, Tamaño, Disponibilidad), de lo contrario no quedará guardado en el sistema.                                      
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicPrecio">        
        <Form.Label>Precio</Form.Label>
        <Form.Control type="precio" placeholder="Ingrese el precio del producto" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicCantidad" >        
        <Form.Label>Cantidad</Form.Label>
        <Form.Control type="precio" placeholder="Ingrese la cantidad del producto" />
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicProductores">        
        <Form.Label>Productores</Form.Label>
        <Form.Control type="productores" placeholder=" " />
      </Form.Group>

          <Button
            variant="success"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Crear Producto
          </Button>
        </Form>
  
      </div>
     
      );
     
  }
}
