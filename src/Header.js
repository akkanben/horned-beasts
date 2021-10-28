import {Component} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      bg: 'light',
    }
  }

  handleChange = (e) => this.props.updateActiveFilter(e.target.value);

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
              <Form className="d-flex">
                <FormControl
                  type="search"
                  value={this.props.value}
                  className="me-2"
                  aria-label="Search"
                  onChange={this.handleChange}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  };
}

export default Header;
