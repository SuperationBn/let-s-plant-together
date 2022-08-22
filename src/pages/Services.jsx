import React from "react";
import HeroServices from "../components/Services/HeroServices";
import Productos from "../components/Services/Productos";
import ServicesCardSection from "../components/Services/ServicesCardSection";

const Services = () => {
	return (
		<>
			<HeroServices />
			<ServicesCardSection />
			<Productos />
		</>
	);
};

export default Services;
