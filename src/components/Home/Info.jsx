import React from "react";
import { SectionInfo, ArticleGridInfo } from "./Info.styled";
import iconImg1 from "../../img/icons1.png";
import iconImg2 from "../../img/icons2.png";
import iconImg3 from "../../img/icons3.png";

const Info = () => {
	return (
		<SectionInfo>
			<ArticleGridInfo>
				<div className="cardInfo">
					<div className="imgIconBox">
						<img src={iconImg1} alt="" />
					</div>
					<h4>uses plants to give life</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
						debitis officia deserunt quaerat laudantium provident ea quam sed,
						quae numquam.
					</p>
					<button>see more</button>
				</div>
				<div className="cardInfo">
					<div className="imgIconBox">
						<img src={iconImg2} alt="" />
					</div>
					<h4>nature makes nothing incomplete and nothing in vain.</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
						debitis officia deserunt quaerat laudantium provident ea quam sed,
						quae numquam.
					</p>
					<button>see more</button>
				</div>
				<div className="cardInfo">
					<div className="imgIconBox">
						<img src={iconImg3} alt="" />
					</div>
					<h4>The forest has ears and the field has eyes</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
						debitis officia deserunt quaerat laudantium provident ea quam sed,
						quae numquam.
					</p>
					<button>see more</button>
				</div>
			</ArticleGridInfo>
		</SectionInfo>
	);
};

export default Info;
