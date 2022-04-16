import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

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
				<div className="app__navbar-logo">
					<img src={images.logo2} alt="logo" />
				</div>
				<ul className="app__navbar-links">
					{["home", "services", "projects", "skills", "contact"].map((item) => (
						<li className="app__flex p-text" key={`link-${item}`}>
							<div />
							<a href={`/#${item}`}>{item}</a>
						</li>
					))}
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
