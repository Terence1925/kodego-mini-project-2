import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import store0 from "../assets/store.jpg.jpg";
import store1 from "../assets/store1.jpg.jpg";
import store2 from "../assets/store2.jpg.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import { CarouselItem } from "react-bootstrap";
import { useEffect, useState } from "react";

const Home = () => {
  const [store, setStore] = useState([]);
  // const [mensclothing, setMensClothing] = useState([]);
  // const [womensclothing, setWomensClothing] = useState([]);
  // const [jewelry, setJewelry] = useState([]);

  // const [electronics, setelectronics] = useState([]);

  useEffect(() => {
    getStore();

    return () => {};
  }, []);

  // useEffect(() => {
  //   return () => {};
  // }, [mensclothing]);

  async function getStore() {
    const { data } = await axios.get("https://fakestoreapi.com/products/");
    console.log(data);
    setStore(data);
  }
  async function getMensClothing() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    console.log(data);
    setStore(data);
  }
  async function getWomensClothing() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
    console.log(data);
    setStore(data);
  }
  async function getJewelery() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    console.log(data);
    setStore(data);
  }
  async function getElectronics() {
    const { data } = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );

    console.log(data);
    setStore(data);
  }

  return (
    <>
      <Carousel className="mb-4">
        <Carousel.Item>
          <img className="carousel-img" src={store0} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p className="carousel-p">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={store1} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p className="carousel-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={store2} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p className="carousel-p">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="d-flex justify-content-center"></div>
      <Container>
        <h3 className="text-center mb-5 ">Store List</h3>
        <Container className="mb-5">
          <Row>
            <Col>
              <div className="category-box mb-4 bg-dark text-white">
                <button
                  className="bg-dark text-white"
                  onClick={getMensClothing}
                >
                  Men's Clothing
                </button>
                {/* {mensclothing.map((mensclothing, index) => {
                  return (
                    <option
                      key={index}
                      value={mensclothing}
                      onChange={(e) => setMensClothing(e.target.value)}
                    ></option>
                  );
                })} */}
              </div>
            </Col>
            <Col>
              <div className="category-box mb-4 bg-dark text-white">
                <button
                  className="bg-dark text-white"
                  onClick={getWomensClothing}
                >
                  Women's Clothing
                </button>
                {/* {womensclothing.map((Womensclothing, index) => {
                  return (
                    <option
                      key={index}
                      value={mensclothing}
                      onChange={(e) => setWomensClothing(e.target.value)}
                    ></option>
                  );
                })} */}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="category-box mb-4 bg-dark text-white">
                <button className="bg-dark text-white" onClick={getJewelery}>
                  Jewelery
                </button>
              </div>
            </Col>
            <Col>
              <div className="category-box mb-4 bg-dark text-white">
                <button className="bg-dark text-white" onClick={getElectronics}>
                  Electronics
                </button>
              </div>
            </Col>
            <div className="category-box bg-dark text-white ">
              <button className="bg-dark text-white" onClick={getStore}>
                All products
              </button>
            </div>
          </Row>
        </Container>
        <Row>
          {store.map((item) => {
            return (
              <Col key={item.id} sm="6" md="3">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Card.Text className="itemCategory">
                      Category: {item.category}
                    </Card.Text>

                    <Button variant="primary">Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
