import React from "react";
import { ArticleFooterFlex, FooterSection } from "./Footer.styled";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
	const prevenirEnvio = e => {
		e.preventDefault();
	};

	return (
		<FooterSection>
			<h2 className="subTitle">part of a green and joyful life</h2>
			<ArticleFooterFlex>
				<div className="formContainer">
					<form onSubmit={prevenirEnvio}>
						<input type="email" id="email" placeholder="Email" />
						<input type="submit" value="subscribe" />
					</form>
				</div>
				<div className="enlacesContainer">
					<div className="navFooter redes">
						<h3 className="logo">
							LET'S <span>PLANT</span> TOGETHER
						</h3>
						<span className="derechos">
							All right reserved © Copyright SuperationBn
						</span>
						<div className="redesLinks">
							<a
								href="https://www.facebook.com/xSuperationbnx/"
								className="redIcons"
								target={"_blank"}
							>
								<FaFacebook />
							</a>
							<a
								href="https://twitter.com/SuperationBn"
								className="redIcons"
								target={"_blank"}
							>
								<FaTwitter />
							</a>
							<a
								href="https://github.com/SuperationBn"
								className="redIcons"
								target={"_blank"}
							>
								<FaGithub />
							</a>
						</div>
					</div>
					<div className="navFooter enlacesExtras">
						<h3>additional information</h3>
						<a href="#">plans</a>
						<a href="#">deals</a>
						<a href="#">affiliates</a>
						<a href="#">groups</a>
						<a href="#">donations</a>
					</div>
					<div className="navFooter contacto">
						<h3>address</h3>
						<span className="direccion">
							<strong>Address</strong> 170 Balistreri Island Suite 674, <br />
							<strong> City</strong> Deshawnbury
						</span>
					</div>
				</div>
			</ArticleFooterFlex>
		</FooterSection>
	);
};

export default Footer;
