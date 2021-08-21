import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
	return (
		<header>
			<Navbar bg="light" variant="light" expand="md" collapseOnSelect>
				<Container>
					<Navbar.Brand href="/">Cshop</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-0">
							<Nav.Link href="#">Shop</Nav.Link>
							<Nav.Link href="#">About</Nav.Link>
							<Nav.Link href="#">Contact</Nav.Link>
							<Nav.Link href="#">Collections</Nav.Link>
						</Nav>
						<Nav className="ml-auto">
							<Nav.Link href="/cart">
								<IoCartOutline />
							</Nav.Link>
							<Nav.Link href="/login">Login</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
