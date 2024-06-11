import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import styles from "./Dashboard.module.css";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Container className={`${styles.customRadius} shadow-lg} p-4 bg-dark`}>
      <Row>
        <Col xs={2} md={2} lg={2} xl={2}>
          <div className="d-flex gap-2">
            <div className={`${styles.userAvatar}`}></div>
            <div className="d-flex flex-column gap-0">
              <span className={`${styles.userName}`}>Abhinav Yadav</span>
              <span className={`${styles.userPhone}`}>+918528384407</span>
            </div>
          </div>
          <div className="mt-5">
            <span className={`${styles.userPhone}`}>MAIN MENU</span>
          </div>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Nav className="me-auto flex-column text-white-50 gap-2">
                <NavLink to="" className={`${styles.navLink}`} end>
                  Dashboard
                </NavLink>
                <NavLink to="orders" className={`${styles.navLink}`}>
                  Orders
                </NavLink>
                <NavLink to="rides" className={`${styles.navLink}`}>
                  Rides
                </NavLink>
                <NavLink to="clients" className={`${styles.navLink}`}>
                  Clients
                </NavLink>
                <NavLink to="drivers" className={`${styles.navLink}`}>
                  Drivers
                </NavLink>
                <NavLink to="shift" className={`${styles.navLink}`}>
                  Shift
                </NavLink>
                <NavLink to="livemap" className={`${styles.navLink}`}>
                  Live Map
                </NavLink>
                <NavLink to="carclasses" className={`${styles.navLink}`}>
                  Car Classes
                </NavLink>
                <NavLink to="branches" className={`${styles.navLink}`}>
                  Branches
                </NavLink>
                <NavLink to="moderators" className={`${styles.navLink}`}>
                  Moderators
                </NavLink>
                <NavLink to="settings" className={`${styles.navLink}`}>
                  Settings
                </NavLink>
              </Nav>
            </Container>
          </Navbar>
        </Col>
        <Col xs={6} md={6} lg={8} xl={8}>
          <Container
            className={`${styles.customRadius} shadow-lg} p-4 bg-white`}
          >
            {" "}
            <Outlet />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
