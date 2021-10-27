import {Component} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      bg: 'light',
    }
  }

  render() {
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" bg={this.state.bg} variant={this.state.theme}>
          <Container>
            <Navbar.Brand href="#home">Horned Beasts</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#lorem">Lorem</Nav.Link>
                <Nav.Link href="#ipsum">Impsum</Nav.Link>
                <NavDropdown title="Theme" id="collasible-nav-dropdown">
                  <NavDropdown.Item onClick={() => this.setState({bg: 'light', theme: 'light'})}>Light Theme</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => this.setState({bg: 'dark', theme: 'dark'})}>Dark Theme</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => this.setState({bg: 'primary', theme: 'dark'})}>Fun Theme</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  };
}

export default Header;
