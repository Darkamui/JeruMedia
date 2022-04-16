import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";
function Header() {
	const { t } = useTranslation();
	const scaleVariants = {
		whileInView: {
			scale: [0, 1],
			opacity: [0, 1],
			transition: {
				duration: 1,
				ease: "easeInOut",
			},
		},
	};
	return (
		<div className="app__header app__flex">
			<motion.div
				whileInView={{ x: [-300, 0], opacity: [0, 1] }}
				transition={{ duration: 1 }}
				className="app__header-info"
			>
				<div className="app__header-badge">
					<div className="badge-cmp app__flex">
						<motion.span
							whileInView={{ rotate: [0, 35, 0], scale: [1, 1.25, 1] }}
							transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
						>
							👋
						</motion.span>
						<div style={{ marginLeft: 20 }}>
							<p className="p-text">{t("firstHeaderTitle")}</p>
							<h1 className="head-text">JeruMedia</h1>
						</div>
					</div>

					<div className="tag-cmp app__flex">
						<p className="p-text typewriter">{t("webDevTitle")}</p>
						<p className="p-text typewriter">{t("mobileDevTitle")}</p>
					</div>
					<div className="tag-cmp app__flex hiddenMobile">
						<p className="p-text typewriter">{t("pixelTitle")}</p>
						<p className="p-text typewriter">{t("seoTitle")}</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ scale: [0, 1], opacity: [0, 1] }}
				transition={{ duration: 1 }}
				className="app__header-img"
			>
				<img
					src={images.profileTest}
					alt="profile_bg"
					style={{ height: "100%", objectFit: "cover" }}
				/>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src={images.circle}
					alt="profile_circle"
					className="overlay_circle"
				/>
			</motion.div>

			<motion.div
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
				className="app__header-circles"
			>
				{[images.laravel, images.react, images.css].map((circle, index) => (
					<motion.div
						whileInView={
							index === 1
								? {
										x: [0, 45, 0, -45, 0],
										y: [0, -25, -45, -25, 0],
										rotate: [0, 360],
										scale: [1, 1.25, 1, 0.75, 1],
								  }
								: index === 0
								? {
										x: [0, -45, 0, 45, 0],
										y: [0, 25, 45, 25, 0],
										rotate: [0, 360],
										scale: [1, 1.25, 1, 0.75, 1],
								  }
								: {
										x: [0, -45, 0, 45, 0],
										y: [0, 25, 45, 25, 0],
										rotate: [0, 180, 360],
										scale: [1, 1.15, 1, 0.75, 1],
								  }
						}
						transition={{
							duration: 5,
							ease: "linear",
							repeat: Infinity,
						}}
						className="circle-cmp app__flex"
						key={`circle-${index}`}
					>
						<motion.img src={circle} alt="profile_bg" />
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}

export default AppWrap(Header, "home");
