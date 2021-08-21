import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import WorkSection from "../components/WorkSection";
import products from "../products";
import Hero from "../components/Hero";

const HomeScreen = () => {
	return (
		<>
			<Hero />
			<h3 className="mt-5 mb-3">Latest Products</h3>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
			<WorkSection />
		</>
	);
};

export default HomeScreen;
