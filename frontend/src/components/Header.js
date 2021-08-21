import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
	return (
		<>
			<header>
				<Navbar
					bg="light"
					variant="light"
					expand="md"
					className="fixed-top"
					collapseOnSelect
				>
					<Container>
						<LinkContainer to="/">
							<Navbar.Brand>Cshop</Navbar.Brand>
						</LinkContainer>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-0">
								<LinkContainer to="/">
									<Nav.Link>Shop</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/">
									<Nav.Link>Collections</Nav.Link>
								</LinkContainer>
							</Nav>
							<Nav className="ml-auto">
								<LinkContainer to="/cart">
									<Nav.Link>
										<IoCartOutline />
									</Nav.Link>
								</LinkContainer>
								<LinkContainer to="/login">
									<Nav.Link>Login</Nav.Link>
								</LinkContainer>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Header;
