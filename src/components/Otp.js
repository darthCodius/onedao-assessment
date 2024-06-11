import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import styles from "./Login.module.css";

import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const inputRefs = useRef([]);

  console.log(inputRefs);

  const navigate = useNavigate();

  const handleOtp = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);

    setOtp(newOtp);

    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <Container className={`${styles.customRadius} shadow-lg}`}>
      <Row>
        <Col className="d-none d-lg-flex d-xl-flex justify-content-center align-items-center p-0">
          <Image
            src="https://cdn.pixabay.com/photo/2022/09/15/06/14/pattern-7455773_1280.png"
            className={`img-fluid ${styles.customImageBorder}`}
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center py-5">
          <Form className="w-75">
            <div className="d-flex flex-wrap flex-column justify-content-center align-content-center">
              <h3 className="align-self-center">Verify your email</h3>
              <Form.Text className="text-muted mb-3 align-self-center">
                Enter the OTP from your register email id
              </Form.Text>
            </div>

            <Form.Group
              className="mb-3 d-flex justify-content-between align-content-center"
              controlId="formOtp"
            >
              {otp.map((value, idx) => (
                <Form.Control
                  type="text"
                  className={`${styles.inputBox} border  ${styles.otpBox} border-black`}
                  key={idx}
                  onChange={(e) => handleChange(e, idx)}
                  value={value}
                  ref={(input) => (inputRefs.current[idx] = input)}
                />
              ))}
            </Form.Group>

            <div className="d-grid">
              <Button
                variant="dark "
                type="submit"
                onClick={(e) => handleOtp(e)}
                className="p-2"
              >
                Proceed
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Otp;
