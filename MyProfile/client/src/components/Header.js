import React, { useState } from "react";
import { NavLink as RRNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={RRNavLink} to="/">My Portfolio</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                            <>
                             
                            <NavItem>
                                    <NavLink tag={RRNavLink} to="/basic">
                                        About
                                    </NavLink>
                            </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/education">
                                        Education
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink tag={RRNavLink} to="/interest">
                                        Interest
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/profile">
                                        Socials
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/skill">
                                        Skills
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/volunteer">
                                        Volunteer
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/work">
                                        Work History
                                    </NavLink>
                                </NavItem>
                            </>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}