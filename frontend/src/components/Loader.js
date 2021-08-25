import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
	return (
		<Spinner
			animation="grow"
			role="status"
			style={{
				width: "50px",
				height: "50px",
				margin: "auto",
				position: "absolute",
				display: "block",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
			}}
		/>
	);
};

export default Loader;
