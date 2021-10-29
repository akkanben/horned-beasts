import {Component} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

class Header extends Component {

  handleChange = (e) => this.props.updateActiveFilter(e.target.value);
  handleHornChange = (e) => {
    this.props.updateHornFilter(e.target.value);
  }

  render() {
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" bg={this.props.theme.bg} variant={this.props.theme.variant}>
          <Container>
            <Navbar.Brand href="#home">Horned Beasts</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#lorem">Lorem</Nav.Link>
                <Nav.Link href="#ipsum">Impsum</Nav.Link>
                <NavDropdown title="Theme" id="collasible-nav-dropdown">
                  <NavDropdown.Item onClick={() => this.props.changeTheme('light', 'light', 'white', '#f8f9fa')}>Light Theme</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => this.props.changeTheme('dark', 'dark', '#484848', '#212529')}>Dark Theme</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => this.props.changeTheme('primary', 'dark', '#5398fd', '#0d6efd')}>Blue Theme</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Select onChange={this.handleHornChange} aria-label="Floating label select example">
                  <option value="all">All</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="100">One Hundred</option>
                </Form.Select>
              </Form>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  value={this.props.value}
                  className="me-2"
                  placeholder="Filter by Text"
                  aria-label="Search"
                  onChange={this.handleChange}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header >
    )
  };
}

export default Header;
