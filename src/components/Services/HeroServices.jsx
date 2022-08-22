import React from "react";
import { HeroSectionStyles } from "./HeroServices.styled";
// import ilustrationImgServices from "../../img/ilustrationForSection2.png";

const HeroServices = () => {
	return (
		<HeroSectionStyles>
			<div className="backGroundServises">
				<img
					src="https://images.pexels.com/photos/212323/pexels-photo-212323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
			</div>
			<div className="containerTextImgHeroServices">
				<div className="textServicesHeroContents">
					<h2>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
						aliquam.
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam
						quam perferendis et, corrupti cum eum magnam accusantium libero
						repudiandae!
					</p>
					<button>see more</button>
				</div>
				<div className="imgServicesIlustration">
					{/* <img src={ilustrationImgServices} alt="" /> */}
				</div>
			</div>
		</HeroSectionStyles>
	);
};

export default HeroServices;
