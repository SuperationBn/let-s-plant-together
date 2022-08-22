import React from "react";
import ilustrationMoreAbout from "../../img/ilustrationForSection3.png";
import { FaCheckCircle } from "react-icons/fa";
import { ArticleMoreAboutGrid, SectionAboutMore } from "./MoreAbout.styled";

const MoreAboutUsSection = () => {
	return (
		<SectionAboutMore>
			<ArticleMoreAboutGrid>
				<div className="textContextMoreAbout">
					<h2>
						learn more about <spam className="anosLogro">our work</spam> , and
						projects we have planned for the future.
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam
						blanditiis dolor. Aspernatur ipsam obcaecati quo fuga voluptates
						dolorum pariatur accusamus modi, consectetur, itaque laudantium
						eius, ipsum amet tempora? Praesentium nam excepturi magni ea
						molestias.
					</p>
				</div>
				<div className="imgLogro">
					<img src={ilustrationMoreAbout} alt="" />
				</div>
			</ArticleMoreAboutGrid>
		</SectionAboutMore>
	);
};

export default MoreAboutUsSection;
