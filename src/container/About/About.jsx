import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18n from "../../assets/i18n/i18n";

const About = () => {
	const [abouts, setAbouts] = useState([]);
	const { t } = useTranslation();
	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client.fetch(query).then((data) => {
			setAbouts(data);
		});
	}, []);

	return (
		<>
			<div className="container">
				{i18n.language === "en" ? (
					<h2 className="head-text">
						You <span>Dream</span> It.
						<br />
						We <span>Build</span> It.
					</h2>
				) : (
					<h2 className="head-text">
						Votre <span>Rêve.</span>
						<br />
						Notre <span>Création.</span>
					</h2>
				)}

				<div className="app__profiles">
					{abouts.map((about, index) => (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: "tween" }}
							className="app__profile-item"
							key={about.title + index}
						>
							<img src={urlFor(about.imgUrl)} alt={about.title} />
							<h2 className="bold-text" style={{ marginTop: 20 }}>
								{about.title}
							</h2>
							<p className="p-text" style={{ marginTop: 10 }}>
								{about.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(About, "app__about"),
	"services",
	"app__whitebg"
);
