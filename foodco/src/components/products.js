import React from "react";
import { FaDivide, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"; 
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css";

function ShowCard(product) {
  return(
    <div>
      <Row id={product.id}>
       <Card
         style={{
           width: "30rem",
           padding: "20px",
           margin: "10px auto"
         }}
       >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle>{product.description}</Card.Subtitle>
        <Card.Text>{product.ingredients}</Card.Text>
        <Card.Text>Rating: {product.rating}</Card.Text>
        <p>Price: ${product.discounted_price}</p>
        <Button variant="success" size="lg">Reserve</Button>
       </Card>
     </Row>
     </div>
   )
}
function Products(props) {
  return (
    <div>
      {/* Navbar */}
      <Navbar className="navbar" bg="light" expand="lg">
        {/* ... (unchanged) */}
      </Navbar>

      {/* About Us */}
      <div className="about-us">
        <div
          className="text-section"
          style={{ textAlign: "center", margin: "10px 0" }}
        >
          <h2>About Us</h2>
          <p>
            Welcome to FoodEco! We are dedicated to providing you with the best
            and freshest produce. Learn more about our mission and values below.
          </p>
        </div>

        {/* Main content */}
        <Container>
          <div className="products-list">
            {/* Product of the Week */}
            <Card
              style={{ width: "24rem", margin: "0 auto", marginBottom: "20px" }}
            >
              {/* ... (unchanged) */}
            </Card>

            {/* Group Card: Card 1 and Card 2 aligned horizontally */}
            <Row id="old">
              <Col xs={12} md={6} lg={6}>
                <Card
                  style={{
                    width: "18rem",
                    margin: "10px auto",
                    padding: "20px",
                  }}
                >Hello Old
                  {/* ... (unchanged) */}
                </Card>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Card
                  style={{
                    width: "18rem",
                    margin: "10px auto",
                    padding: "20px",
                  }}
                >
                  {/* ... (unchanged) */}
                </Card>
              </Col>
            </Row>

            {/* Group Card: Card 3 and Card 4 aligned horizontally */}
            <Row id="surprise-bag">
              <Col xs={12} md={6} lg={6}>
                <Card
                  style={{
                    width: "18rem",
                    margin: "10px auto",
                    padding: "20px",
                  }}
                >
                  {/* ... (unchanged) */}
                </Card>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Card
                  style={{
                    width: "18rem",
                    margin: "10px auto",
                    padding: "20px",
                  }}
                >
                  {/* ... (unchanged) */}
                </Card>
              </Col>
            </Row>
            </div>
        </Container>
          <div
            style={{ textAlign: "center", margin: "10px 0" }}
          >
            <h2>New Layout</h2>
          </div>
        <Container>
          <div className="products-list">   
            {props.products.map((product) => {
              return (
                ShowCard(product)
              );
            })}
          </div>
        </Container>

        {/* Footer */}
        <footer className="footer">
          <p>GDI Hackathon 2023 | Team 3: FoodEco App | All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default Products;
