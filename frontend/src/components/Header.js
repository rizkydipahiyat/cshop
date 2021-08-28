import React from "react";
import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const Header = () => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const logoutHandler = () => {
		dispatch(logout());
	};
	return (
		<>
			<header>
				<Navbar bg="light" variant="light" expand="md" collapseOnSelect>
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
										<Badge bg="danger">{cartItems.length}</Badge>
									</Nav.Link>
								</LinkContainer>
								{userInfo ? (
									<NavDropdown title={userInfo.name} id="username">
										<LinkContainer to="/profile">
											<NavDropdown.Item>Profile</NavDropdown.Item>
										</LinkContainer>
										<NavDropdown.Item onClick={logoutHandler}>
											Logout
										</NavDropdown.Item>
									</NavDropdown>
								) : (
									<LinkContainer to="/login">
										<Nav.Link>Login</Nav.Link>
									</LinkContainer>
								)}
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
};

export default Header;
