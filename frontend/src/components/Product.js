import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
	return (
		<>
			<div className="card">
				<Link to={`/product/${product._id}`}>
					<Card.Img src={product.image} variant="top" />
					<Card.Text className="mt-2">
						{product.name} <br /> <strong>${product.price}</strong>{" "}
					</Card.Text>
				</Link>
			</div>
		</>
	);
};

export default Product;
