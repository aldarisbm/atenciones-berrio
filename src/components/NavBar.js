import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    this.state = {
            isOpen: false
          
    };
      
  }
  toggle() {
    this.setState({
            isOpen: !this.state.isOpen
          
    });
      
  }
  render() {
    return (
            <div>
              <Navbar dark expand="md">
                <NavbarBrand href="/">Inicio</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="/acerca">Nuestro Servicios</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/galeria">Galeria</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/contactanos">Contactanos</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          
    );
      
  }

}
