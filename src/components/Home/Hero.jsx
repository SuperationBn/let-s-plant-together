import React from "react";
import { SerctionHero } from "./Home.styled";
// ICONS
import { FcAbout, FcQuestions } from "react-icons/fc";

const Hero = () => {
	return (
		<SerctionHero>
			<div className="textContex">
				<h2>
					Plants have life, they hear, they feel, they breathe, they feed, and
					some of them have cells that reproduce indefinitely.
				</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
					nostrum?
				</p>
				<div className="btnHero">
					<button>
						<FcAbout className="iconsHero" /> how can I start
					</button>
					<button>
						<FcQuestions className="iconsHero" /> more info
					</button>
				</div>
			</div>
		</SerctionHero>
	);
};

export default Hero;
