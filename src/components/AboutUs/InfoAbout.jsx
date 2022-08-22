import React from "react";
import { InfoAboutSection } from "./InfoAbout.styled";

import { FaEnvira, FaFly, FaLeanpub, FaCloudSun } from "react-icons/fa";

const InfoAbout = () => {
	return (
		<InfoAboutSection>
			<div className="imgBoxAbout">
				<img
					src="https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
			</div>
			<div className="textAboutContainer">
				<div className="titleAbout">
					<h2>we would love to work with you</h2>
				</div>
				<div className="cardAboutBox">
					<div className="cardAbout">
						<FaEnvira className="iconsAboutCard" />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							aperiam dignissimos magnam rem.
						</p>
					</div>
					<div className="cardAbout">
						<FaFly className="iconsAboutCard" />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							aperiam dignissimos magnam rem.
						</p>
					</div>
					<div className="cardAbout">
						<FaLeanpub className="iconsAboutCard" />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							aperiam dignissimos magnam rem.
						</p>
					</div>
					<div className="cardAbout">
						<FaCloudSun className="iconsAboutCard" />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
							aperiam dignissimos magnam rem.
						</p>
					</div>
				</div>
			</div>
		</InfoAboutSection>
	);
};

export default InfoAbout;
