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
            <Row id="pizzas">
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

        {/* Footer */}
        <footer className="footer">
          <p>GDI Hackathon 2023 | Team 3: FoodEco App | All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default Products;
