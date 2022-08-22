import React from "react";
import {
	ArticleExperienciaGrid,
	SectionExperiencia,
} from "./Experiencia.styled";
import ilustrationImg from "../../img/ilustrationForSection1.png";

const Experiencia = () => {
	return (
		<SectionExperiencia>
			<ArticleExperienciaGrid>
				<div className="imgExperiencia">
					<img src={ilustrationImg} alt="" />
				</div>
				<div className="textContextExperiencia">
					<h2>
						more than <spam className="anosExperiencia">10 years</spam> of
						experience, dealing with plants and taking care of nature.
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam
						blanditiis dolor. Aspernatur ipsam obcaecati quo fuga voluptates
						dolorum pariatur accusamus modi, consectetur, itaque laudantium
						eius, ipsum amet tempora? Praesentium nam excepturi magni ea
						molestias.
					</p>
					<button>more about our experience</button>
				</div>
			</ArticleExperienciaGrid>
		</SectionExperiencia>
	);
};

export default Experiencia;
