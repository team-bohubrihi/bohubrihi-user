import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../assets/css/NavigationBar.css';
import logo from '../../assets/images/Bohubrihi-Online-Course-Logo-Updated-White.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar dark expand="md" className="deep-blue-background">
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={logo} alt="Bohubrihi Logo" /></Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto mb-2 mb-lg-0" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Courses
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Career Tract Program
                                </DropdownItem>
                                <DropdownItem>
                                    Course Category
                                </DropdownItem>
                                <DropdownItem>
                                    Free Course
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    All Courses
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem>
                            <NavLink exact to="/" activeClassName="yellow" className="nav-link">Corporate e-learning</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact to="/dashboard" activeClassName="yellow" className="nav-link">Login to Dashboard</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
};

export default NavigationBar;