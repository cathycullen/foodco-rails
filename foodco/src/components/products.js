import React from "react";
import Nav from "react-bootstrap/Nav";

function Products(props) {
  return (
    <div>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <h1>These products are from the API</h1>
      {props.products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
