import React, { useState } from "react";
import { HeaderStyled } from "./Header.styled";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	NavLink,
} from "react-router-dom";
import Home from "../../pages/Home";
import AboutUs from "../../pages/AboutUs";
import Services from "../../pages/Services";
// ICONS
import { IoIosContrast } from "react-icons/io";
import { FaBars, FaHome, FaUsers, FaChartPie } from "react-icons/fa";

const Header = () => {
	const [theme, setTheme] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	if (theme) {
		document.querySelector("body").classList.add("themeDark");
		document.querySelector("body").classList.remove("themeLigth");
	} else {
		document.querySelector("body").classList.add("themeLigth");
		document.querySelector("body").classList.remove("themeDark");
	}

	// CAMBIAR EL TEMA GLOBALMENTE
	const cambiarTheme = () => {
		setTheme(!theme);
	};

	// MOSTRAR Y OCULTAR MENU
	const showMenuEvent = () => {
		setShowMenu(!showMenu);
	};

	// OCULTAR MENU AL HACER CLICK EN UN ENLACE
	const esconderMenuAlHacerClick = e => {
		if (e.target && e.target.tagName === "A") {
			setShowMenu(!showMenu);
		}
	};

	// const styledActive = ({ isActive }) => {
	// 	return {
	// 		background: isActive ? "red" : "blue",
	// 		color: isActive ? "white" : "black",
	// 	};
	// };

	return (
		<Router>
			<HeaderStyled>
				<div className="headerContainer">
					<div className="logo">
						<h1>
							<NavLink className="h1Link" to="/">
								let's plant together
							</NavLink>
						</h1>
					</div>
					<div className="navContainer">
						<nav
							onClick={esconderMenuAlHacerClick}
							className={`navLinksBox ${showMenu ? "navActive" : ""}`}
						>
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? "active" : "link")}
							>
								<FaHome className="iconMenuLinks" />
								home
							</NavLink>
							<NavLink
								to="/services"
								className={({ isActive }) => (isActive ? "active" : "link")}
							>
								<FaChartPie className="iconMenuLinks" />
								services
							</NavLink>
							<NavLink
								to="/about"
								className={({ isActive }) => (isActive ? "active" : "link")}
							>
								<FaUsers className="iconMenuLinks" />
								about us
							</NavLink>
						</nav>
					</div>
					<div className="iconsHeader">
						<IoIosContrast onClick={cambiarTheme} className="icon" />
						<FaBars onClick={showMenuEvent} className="icon iconMenu" />
					</div>
				</div>
			</HeaderStyled>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/about" element={<AboutUs />} />
				</Routes>
			</main>
		</Router>
	);
};

export default Header;
