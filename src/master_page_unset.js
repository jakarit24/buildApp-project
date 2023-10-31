// not use
import { Navbar, Container, Nav } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

//สร้าง Component Master Page
const MasterPage = (props) => {
  return (
    <>
      {/*-------สร้าง แถบเมนูด้านบน ด้วย Navbar จาก ReactBootstrap-----------*/}
      <header>
          <h1>Hi DEV !!</h1>
        </header>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#page_home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*--------สร้าง Link ไปที่ page1----------*/}
              <Nav.Link href="/">Home</Nav.Link>
              <br></br>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <footer>
      <div>
       <p>test test test test 1</p>
      </div>
          <h4>End Web</h4>
        </footer>
    </>
  );
};

export default MasterPage;
