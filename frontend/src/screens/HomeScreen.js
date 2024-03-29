import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import WorkSection from "../components/WorkSection";
// import Hero from "../components/Hero";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";

const HomeScreen = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, error, products } = productList;

	useEffect(() => {
		dispatch(listProducts());
	}, [dispatch]);
	return (
		<>
			{/* <Hero /> */}
			<Meta />
			<h3 className="mt-5 mb-3">Latest Products</h3>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
			<WorkSection />
		</>
	);
};

export default HomeScreen;
