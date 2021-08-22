import React from "react";
import {
	Breadcrumb,
	Image,
	Row,
	Col,
	ListGroup,
	Card,
	Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import products from "../products";

const ProductScreen = ({ match }) => {
	const product = products.find((p) => p._id === match.params.id);
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
		</>
	);
};

export default ProductScreen;
