import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../../redux/action/index";

const FigureProduct = (props) => {
  const [quantity, setQuantity] = useState(0);

  const [stock, setStock] = useState(props.dataProduct.quantity);

  console.log(props);

  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const dispatch = useDispatch();

  const handleCart = (product) => {
    const data = {
      dataProduct: { ...product.dataProduct, total_request: quantity },
    };
    product = data;
    console.log(product, "console log");
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="col-md-6">
              <img
                src={props.dataProduct.image}
                alt={props.dataProduct.name}
                height="400px"
                width="400px"
              ></img>
            </div>
          </Col>
          <Col>
            <div>
              <h4 className="text-uppercase text-black-50">
                {props.dataProduct.category}
              </h4>
              <h1 className="display-5">{props.dataProduct.name}</h1>
              <h5 className="my-4">Available Stock :{stock}</h5>
              <Button variant="outline-dark"
                onClick={() => {
                  setQuantity(quantity + 1);
                  setStock(stock - 1);
                }}
                disabled={stock === 0 ? true : false}
              >
                +
              </Button>
              {quantity}
              <Button variant="outline-dark"
                onClick={() => {
                  setQuantity(quantity - 1);
                  setStock(stock + 1);
                }}
                disabled={quantity === 0 ? true : false}
              >
                -
              </Button>
              <h3 className="display-6 fw-bold my-4">
                Rp {props.dataProduct.price}{" "}
              </h3>
              <p className="lead">{props.dataProduct.description}</p>
              <Button
                onClick={() => handleCart(props)}
                variant="outline-dark"
                className="px-4 py-2"
              >
                {cartBtn}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FigureProduct;
