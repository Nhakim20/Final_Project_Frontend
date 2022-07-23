import React, { useState} from "react";
import { useSelector } from "react-redux";
import LogoMandiri from "../../assets/img/logo mandiri.png";
import { Form, Button } from "react-bootstrap";
import { checkout } from '../../services/api';

const Checkout = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const state = useSelector((state) => state.addItem);
  console.log(state)

  const submitCheckout = async (e) => {
    e.preventDefault();
    await checkout(name, email, address, state)
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }


  var total = 0;
  const itemList = (item) => {
    const totalItem = item.dataProduct.price * item.dataProduct.total_request
    total = total + totalItem;
    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.dataProduct.name}</h6>
        </div>
        <span className="text-muted">{totalItem}</span>
      </li>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}

              <li className="list-group-item d-flex justify-content-between">
                <span>Total (Rp)</span>
                <strong>Rp{total}</strong>
              </li>
            </ul>
            <div className="row">
              <div className="col-3 text-right">
                <img src={LogoMandiri} alt="mandiri" width="80" />
              </div>
              <div className="col">
                <dl>
                  <dd>Bank Mandiri</dd>
                  <dd>2208 1996</dd>
                  <dd>La Collection</dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Checkout</h4>
            <Form onSubmit={submitCheckout}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)} 
                required={true} 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="you@example.com" 
                onChange={(e) => setEmail(e.target.value)}
                required={true}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="1234 Main St" 
                onChange={(e) => setAddress(e.target.value)}
                required={true}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 btn-lg" a href="https://wa.me/6282154861734?text=Saya%20ingin%20mengonfirmasi%20pembelian%20">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
