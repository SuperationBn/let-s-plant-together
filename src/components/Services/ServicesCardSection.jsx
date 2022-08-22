import React from "react";
import { SectionCardServices } from "./ServicesCard";
import { FaCoffee, FaItunesNote, FaReadme, FaBolt } from "react-icons/fa";

const ServicesCardSection = () => {
	return (
		<SectionCardServices>
			<div className="containerServicesCard">
				<div className="title">
					<h2>we offer you a wide range of deals to suit your needs.</h2>
				</div>
				<article className="cardServices">
					<div className="card">
						<FaCoffee className="iconsServices" />
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
					<div className="card">
						<FaItunesNote className="iconsServices" />
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
					<div className="card">
						<FaReadme className="iconsServices" />
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
					<div className="card">
						<FaBolt className="iconsServices" />
						<p>Lorem ipsum dolor sit amet consectetur.</p>
					</div>
				</article>
			</div>
		</SectionCardServices>
	);
};

export default ServicesCardSection;
