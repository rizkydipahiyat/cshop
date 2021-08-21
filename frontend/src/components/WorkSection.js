import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const WorkSection = () => {
	return (
		<>
			<div className="mt-5">
				<h2>Our Work</h2>
			</div>
			<Row>
				<Col>
					<p className="text-justify">
						We customize exclusive collections for some of the most demanding
						international customers in the world. We create 100% hand-made
						ceramics that are a combination of the highest quality of materials,
						incomparable artisanship and accurate production control. The
						Italian creativity permeates all our designs. Our team develops
						superb table settings and decorations to fit every specific need and
						aesthetics of our clients. We offer product design consultancy
						including aesthetic concept research and development, mood boards,
						graphic communication, technical documentation and 3D rendering. We
						also advise restaurants and hospitality groups for table styling and
						interior decoration. Gaya’s archival records (with technical details
						and physical prototypes) includes about 10,000 different ceramic
						models that are our “master sample” collection. This is a real
						treasure trove of inspiring opportunities for our customers and the
						perfect starting point for any tailored design or collection. If you
						want to start a project with us, it is best to come visit our
						facility in Ubud, Bali. Come and be inspired by our operations,
						explore our archive and brainstorm with our creative team. To
						arrange a meeting please contact irina@gayaceramic.com. If you
						cannot come to Bali, we can always work remotely with prompt
						correspondence and precise communication. In addition to the above
						core business, we proudly retail our own collection in our showroom.
						For more detailed information please contact
						showroom@gayaceramic.com.
					</p>
				</Col>
				<Col className="mt-5">
					<Image src="https://images.squarespace-cdn.com/content/v1/58df25dc6a4963762c660f5d/1514867600491-50YXO8Q7PBDPEV54W4B6/Gaya_Ceramic_work_table_settings_decorations_project.jpg?format=500w" />
				</Col>
			</Row>
		</>
	);
};

export default WorkSection;
