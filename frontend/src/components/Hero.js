import React from "react";
import Typical from "react-typical";

const Hero = () => {
	return (
		<div>
			<div className="hero">
				<h1 className="text-center">
					Where clay and culture
					<Typical steps={["come together.", 1000]} loop={1} wrapper="p" />
				</h1>
			</div>
		</div>
	);
};

export default Hero;
