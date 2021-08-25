import React, { useEffect, useState } from "react";
import {
	Breadcrumb,
	Image,
	Row,
	Col,
	ListGroup,
	Card,
	Button,
	Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ProductScreen = ({ history, match }) => {
	const [qty, setQty] = useState(1);

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		dispatch(listProductDetails(match.params.id));
	}, [dispatch, match]);

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`);
	};
	return (
		<>
			<Row>
				<Breadcrumb className="mt-5" bg="light">
					<Breadcrumb.Item>
						<Link to="/">Home</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item active>Product</Breadcrumb.Item>
				</Breadcrumb>
			</Row>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image
							src={product.image}
							style={{ width: "397px", height: "397px" }}
							alt={product.name}
						/>
					</Col>
					<Col md={6}>
						<Card>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<Row>
										<Col>Name</Col>
										{" : "}
										<Col>
											{" "}
											<strong>{product.name}</strong>{" "}
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Price </Col>
										{" : "}
										<Col>
											{" "}
											<strong>${product.price}</strong>{" "}
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status </Col>
										{" : "}
										<Col>
											{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Qty </Col>
										{" : "}
										<Col>
											<Form.Control
												as="select"
												value={qty}
												onChange={(e) => setQty(e.target.value)}
											>
												{[...Array(product.countInStock).keys()].map((x) => (
													<option key={x + 1} value={x + 1}>
														{x + 1}
													</option>
												))}
											</Form.Control>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Description </Col>
										{" : "}
										<Col></Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>{product.description}</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Button
										onClick={addToCartHandler}
										className="btn-dark btn-block"
										type="button"
										disabled={product.countInStock === 0}
									>
										ADD TO CART
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	);
};

export default ProductScreen;
