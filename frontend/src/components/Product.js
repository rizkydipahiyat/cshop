import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
	return (
		<>
			<div className="card">
				<Card.Img src={product.image} variant="top" />
				<Card.Text className="mt-2">
					{product.name} <br /> <strong>${product.price}</strong>{" "}
				</Card.Text>
			</div>
		</>
	);
};

export default Product;
