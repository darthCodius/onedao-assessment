import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import styles from "./Dashboard.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { BsGridFill } from "react-icons/bs";

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
              <Nav className="me-auto flex-column text-white-50 gap-3">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                  end
                >
                  <span className="d-flex justify-content-center align-content-center gap-3">
                    <BsGridFill className="align-self-center" />
                    <span className={`${styles.menuItem}`}>Dashboard</span>
                  </span>
                </NavLink>
                <NavLink
                  to="orders"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  <span className="d-flex justify-content-center align-content-center gap-3">
                    <BsGridFill className="align-self-center" />
                    <span>Dashboard</span>
                  </span>
                </NavLink>
                <NavLink
                  to="rides"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  <span className="d-flex justify-content-center align-content-center gap-3">
                    <BsGridFill className="align-self-center" />
                    <span>Dashboard</span>
                  </span>
                </NavLink>
                <NavLink
                  to="clients"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  <span className="d-flex justify-content-center align-content-center gap-3">
                    <BsGridFill className="align-self-center" />
                    <span>Dashboard</span>
                  </span>
                </NavLink>
                <NavLink
                  to="drivers"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  <span className="d-flex justify-content-center align-content-center gap-3">
                    <BsGridFill className="align-self-center" />
                    <span>Dashboard</span>
                  </span>
                </NavLink>
                <NavLink
                  to="shift"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  <span className="d-flex justify-content-center align-content-center gap-3">
                    <BsGridFill className="align-self-center" />
                    <span>Dashboard</span>
                  </span>
                </NavLink>
                <NavLink
                  to="livemap"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  <span className="d-flex justify-content-center align-content-center gap-3">
                    <BsGridFill className="align-self-center" />
                    <span>Dashboard</span>
                  </span>
                </NavLink>
                <NavLink
                  to="carclasses"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  <span className="d-flex justify-content-center align-content-center gap-3">
                    <BsGridFill className="align-self-center" />
                    <span>Dashboard</span>
                  </span>
                </NavLink>
                <NavLink
                  to="branches"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  <span className="d-flex justify-content-center align-content-center gap-3">
                    <BsGridFill className="align-self-center" />
                    <span>Dashboard</span>
                  </span>
                </NavLink>
                <NavLink
                  to="moderators"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  <span className="d-flex justify-content-center align-content-center gap-3">
                    <BsGridFill className="align-self-center" />
                    <span>Dashboard</span>
                  </span>
                </NavLink>
                <NavLink
                  to="settings"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  <span className="d-flex justify-content-center align-content-center gap-3">
                    <BsGridFill className="align-self-center" />
                    <span>Dashboard</span>
                  </span>
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
