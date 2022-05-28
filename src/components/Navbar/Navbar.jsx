import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import i18n from "../../assets/i18n/i18n";
import { images } from "../../constants";
import "./Navbar.scss";
import ReactCountryFlag from "react-country-flag";
const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	React.useEffect(() => {
		changeLanguage(true);
	}, []);

	const [englishActive, setEnglishActive] = useState(false);

	const changeLanguage = (value) => {
		if (value) {
			i18n
				.changeLanguage("fr")
				.then(() => setEnglishActive(!value))
				.catch((err) => console.log(err));
		} else {
			i18n
				.changeLanguage("en")
				.then(() => setEnglishActive(!value))
				.catch((err) => console.log(err));
		}
	};
	return (
		<nav className="app__navbar">
			<div
				style={{
					display: "flex",
					gap: "0.5rem",
					width: "100%",
					justifyContent: "space-between",
				}}
			>
				<div
					className="app__navbar-logo"
					onClick={() => changeLanguage(englishActive)}
				>
					<img src={images.logo2} alt="logo" />
					{englishActive ? (
						<div onClick={() => changeLanguage(englishActive)}>
							<ReactCountryFlag
								countryCode="FR"
								svg
								style={{
									fontSize: "2rem",
									marginTop: ".5rem",
									cursor: "pointer",
								}}
							/>
						</div>
					) : (
						<div onClick={() => changeLanguage(englishActive)}>
							<ReactCountryFlag
								countryCode="GB"
								svg
								style={{
									fontSize: "2rem",
									marginTop: ".5rem",
									cursor: "pointer",
								}}
								onClick={() => changeLanguage(englishActive)}
							/>
						</div>
					)}
				</div>
				<ul className="app__navbar-links">
					{englishActive
						? ["home", "services", "projects", "skills", "contact"].map(
								(item) => (
									<li className="app__flex p-text" key={`link-${item}`}>
										<div />
										<a href={`/#${item}`}>{item}</a>
									</li>
								)
						  )
						: ["accueil", "services", "projets", "compétences", "contact"].map(
								(item) => (
									<li className="app__flex p-text" key={`link-${item}`}>
										<div />
										<a
											href={
												item === "projets"
													? `/#projects`
													: item === "compétences"
													? `/#skills`
													: item === "accueil"
													? `/#home`
													: `/#${item}`
											}
										>
											{item}
										</a>
									</li>
								)
						  )}
				</ul>
			</div>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: "easeOut" }}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{["home", "services", "projects", "skills", "contact"].map(
								(item) => (
									<li key={item}>
										<a href={`#${item}`} onClick={() => setToggle(false)}>
											{item}
										</a>
									</li>
								)
							)}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
