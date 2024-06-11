import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import styles from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    navigate("/otp");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    navigate("/dashboard");
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
              <h3 className="align-self-center">
                {isLoginForm
                  ? "Log In to Admin Panel"
                  : "Register to Admin Panel"}
              </h3>
              <Form.Text className="text-muted mb-5 d-flex justify-content-center align-content-center">
                {isLoginForm
                  ? "Enter your email id and password below"
                  : "Create an account by entering below details"}
              </Form.Text>
            </div>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.customLabel}>EMAIL ID</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email id"
                className={`${styles.inputBox} border border-black`}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className={styles.customLabel}>PASSWORD</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                className={`${styles.inputBox} border border-black`}
              />
            </Form.Group>

            {!isLoginForm && (
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={styles.customLabel}>
                  CONFIRM PASSWORD
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password again"
                  className={`${styles.inputBox} border border-black`}
                />
              </Form.Group>
            )}

            <Form.Text className="text-muted d-block mb-3 d-flex align-content-center justify-content-center">
              {isLoginForm
                ? "Don't have an account?"
                : "Already have an account?"}
              <Button
                variant="link"
                size="sm"
                className={`${styles.registerButton} p-0 mx-2`}
                onClick={() => setIsLoginForm((curr) => !curr)}
              >
                {!isLoginForm ? "Login" : "Register"}
              </Button>
            </Form.Text>
            <div className="d-grid">
              {isLoginForm ? (
                <Button
                  variant="dark "
                  type="submit"
                  onClick={(e) => handleLogin(e)}
                >
                  Login
                </Button>
              ) : (
                <Button
                  variant="dark "
                  type="submit"
                  onClick={(e) => handleRegister(e)}
                >
                  Register
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
