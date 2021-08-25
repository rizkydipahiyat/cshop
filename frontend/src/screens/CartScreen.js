import React, { useEffect } from "react";
import {
	Button,
	Card,
	Col,
	Form,
	Image,
	ListGroup,
	Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../components/Message";
import { IoTrashOutline } from "react-icons/io5";

const CartScreen = ({ match, location, history }) => {
	const productId = match.params.id;

	const qty = location.search ? Number(location.search.split("=")[1]) : 1;

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [productId, dispatch, qty]);

	const removeFromCartHandler = (id) => {
		dispatch(removeFromCart(id));
	};

	const checkoutHandler = () => {
		history.push("/login?redirect=shipping");
	};

	return (
		<Row className="mt-5">
			<Col md={8}>
				<h3>Shopping Cart</h3>
				{cartItems.length === 0 ? (
					<Message>
						Your cart is empty <Link to="/">Back</Link>
					</Message>
				) : (
					<ListGroup variant="flush">
						{cartItems.map((item) => (
							<ListGroup.Item key={item.product}>
								<Row>
									<Col md={2}>
										<Image src={item.image} alt={item.name} fluid rounded />
									</Col>
									<Col md={3}>
										<Link
											style={{ color: "#000" }}
											to={`/product/${item.product}`}
										>
											{item.name}
										</Link>
									</Col>
									<Col md={2}>${item.price}</Col>
									<Col md={2}>
										<Form.Control
											as="select"
											value={item.qty}
											onChange={(e) =>
												dispatch(
													addToCart(item.product, Number(e.target.value))
												)
											}
										>
											{[...Array(item.countInStock).keys()].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</Form.Control>
									</Col>
									<Col md={2}>
										<Button
											type="button"
											variant="light"
											onClick={() => removeFromCartHandler(item.product)}
										>
											<IoTrashOutline style={{ color: "red" }} />
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<Card>
					<ListGroup variant="flush">
						<ListGroup.Item>
							{/* @desc akumulasi + jumlah qty, 0(hasil) */}
							<h3>
								Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
								items
							</h3>
							$
							{cartItems
								.reduce((acc, item) => acc + item.qty * item.price, 0)
								.toFixed(2)}
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								type="button"
								className="btn-dark btn-block"
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}
							>
								PROCEED TO CHECKOUT
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	);
};

export default CartScreen;
