import React from "react";
import { FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"; // Add Row component
import "bootstrap/dist/css/bootstrap.min.css";

function Products(props) {
  return (
    <div>
      {/* Navbar */}
      <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Brand href="#home">FoodEco</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="#about-us">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#pizzas">Pizzas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#surprise-bag">Surprise Bag</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <a
                href="https://github.com/cathycullen/foodco-railsl"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <FaGithub size={30} />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
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
        <container>
          <div className="products-list">
            {/* Product of the Week */}
            <Card
              style={{
                width: "18rem",
                margin: "10px 0",
                marginBottom: "20px",
              }}
            >
              <Card.Header>Product of the Week!</Card.Header>
              {/* Card Image at the top */}
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body
                style={{ width: "18rem", margin: "10px 0", padding: "20px" }}
              >
                {/* Adjusted padding */}
                <Card.Title>A random picked goodies!!!</Card.Title>
                <Card.Text>
                  This surprise bag will mostly be a random produce chosen for
                  you. Be excited to enjoy when you receive your bag!
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Group Card: Card 1 and Card 2 aligned horizontally */}
            <container id="pizzas">
              <Col xs={12} md={6} lg={6}>
                <Card
                  style={{ width: "18rem", margin: "10px 0", padding: "20px" }}
                >
                  <Card.Header>Special</Card.Header>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                    alt="Pepperoni Pizza"
                  />
                  <Card.Body>
                    <Card.Title>Pepperoni Pizza</Card.Title>
                    <Card.Text>
                      Ingredients: gluten, sauce, mozzarella cheese, pepperoni.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Card
                  style={{ width: "18rem", margin: "10px 0", padding: "20px" }}
                >
                  <Card.Header>Vegetarian</Card.Header>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                    alt="Healthy Veggie Pizza"
                  />
                  <Card.Body>
                    <Card.Title>Healthy Veggie Pizza</Card.Title>
                    <Card.Text>
                      Ingredients: gluten, sauce, blue cheese, peppers,
                      mushrooms, eggplants.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </container>

            {/* Group Card: Card 3 and Card 4 aligned horizontally */}
            <container id="surprise-bag">
              {/* <Col xs={12} md={6} lg={6}>
                <Card
                  style={{ width: "18rem", margin: "10px 0", padding: "20px" }}
                >
                  <Card.Header>Surprise Bag for Hosting</Card.Header>

                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                    alt="Surprise Bag for Hosting"
                  />
                  <Card.Body>
                    <Card.Title>Surprise Bag for Hosting</Card.Title>
                    <Card.Text>
                      Ingredients: This surprise bag will most likely contain
                      pasta, potatoes, vegetables, some protein, a sauce, and a
                      bottle of wine for your hosting preparation.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col> */}
              <Col xs={12} md={6} lg={6}>
                <Card
                  style={{ width: "18rem", margin: "10px 0", padding: "20px" }}
                >
                  <Card.Header>Surprise Bag for Good Start</Card.Header>
                  <Card.Img
                    variant="top"
                    src="https://via.placeholder.com/150"
                    alt="Surprise Bag for Good Start"
                  />
                  <Card.Body>
                    <Card.Title>Healthy Veggie Pizza</Card.Title>
                    <Card.Text>
                      Ingredients: This surprise bag will most likely contain
                      keto food, rice, vegetables, some protein, a sauce, and a
                      bottle of healthy juice for your healthy diet.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </container>
          </div>
        </container>

        {/* Footer */}
        <footer className="footer">
          <p>GDI Hackathon 2023 | Team 3: FoodEco App | All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default Products;
