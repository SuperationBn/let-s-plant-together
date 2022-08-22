import React from "react";
import { SectionLogros, ArticleLogosGrid } from "./Logros.styled";
import ilustrationImgLogo from "../../img/ilustrationForSection4.png";
import { FaCheckCircle } from "react-icons/fa";

const Logron = () => {
	return (
		<SectionLogros>
			<ArticleLogosGrid>
				<div className="textContextLogros">
					<h2>
						{" "}
						throughout our history we have achieved{" "}
						<spam className="anosLogro">several logos</spam> that we are proud
						of
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. A nam
						blanditiis dolor. Aspernatur ipsam obcaecati quo fuga voluptates
						dolorum pariatur accusamus modi, consectetur, itaque laudantium
						eius, ipsum amet tempora? Praesentium nam excepturi magni ea
						molestias.
					</p>
					<div className="listaDeLogros">
						<span>
							<FaCheckCircle className="iconsListCheck" /> planting more than{" "}
							<span className="anosLogro">+500,000</span> tree shoots
						</span>
						<span>
							<FaCheckCircle className="iconsListCheck" /> charitable donations
						</span>
						<span>
							<FaCheckCircle className="iconsListCheck" /> collect the garbage,
							in order to recycle the
						</span>
						<span>
							<FaCheckCircle className="iconsListCheck" /> avoid{" "}
							<span className="anosLogro">cutting</span> down trees
						</span>
					</div>
					{/* <button>more about our experience</button> */}
				</div>
				<div className="imgLogro">
					<img src={ilustrationImgLogo} alt="" />
				</div>
			</ArticleLogosGrid>
		</SectionLogros>
	);
};

export default Logron;
