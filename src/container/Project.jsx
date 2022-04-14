import React from "react";
import { useLocation } from "react-router-dom";
import { urlFor } from "../client";
import "./Project.scss";
import { images } from "../constants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
const Project = () => {
	const { state } = useLocation();
	return (
		<div>
			{state ? (
				<main id="project">
					<motion.div
						className="watermark"
						whileInView={{ opacity: [0, 0.5, 1] }}
						transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
					>
						<p>{state.work.title}</p>
					</motion.div>
					<motion.div
						className="watermark2"
						whileInView={{ opacity: [0, 0.5, 1] }}
						transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
					>
						<p>{state.work.title}</p>
					</motion.div>
					<div className="projectContainer">
						{/* <h3>{state.work.title}</h3> */}
						<div className="projectImg">
							<Carousel showThumbs={false}>
								<div>
									<img src={urlFor(state.work.imgUrl)} />
								</div>
								<div>
									<img src={urlFor(state.work.imgUrl)} />
								</div>
								<div>
									<img src={urlFor(state.work.imgUrl)} />
								</div>
							</Carousel>
							{/* <img src={urlFor(state.work.imgUrl)} alt="" /> */}
						</div>
						<motion.div
							whileInView={{ opacity: [0, 0, 1] }}
							transition={{ duration: 0.5 }}
							className="projectContent"
						>
							<motion.div
								className="left"
								whileInView={{ x: [-200, -100, 0], opacity: [0, 0, 1] }}
								transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
							>
								<div className="titleBrush">
									<h4>Project Overview</h4>
									<div className="brushContainer">
										<img src={images.brush} className="brush" alt="" />
									</div>
								</div>
								<p>{state.work.description}</p>
							</motion.div>
							<motion.div
								className="right"
								whileInView={{ x: [200, 100, 0], opacity: [0, 0, 1] }}
								transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
							>
								<div className="titleBrush">
									<h4>Technologies used</h4>
									<div className="brushContainer">
										<img src={images.brush} className="brush" alt="" />
									</div>
								</div>
								<div className="techContainer">
									{state.work.tags.map((tag) => (
										<>
											{tag.includes("Laravel") && (
												<div className="techBg">
													<img src={images.laravel} alt="" />
												</div>
											)}
											{tag.includes("React") && (
												<div className="techBg">
													<img src={images.react} alt="" />
												</div>
											)}
											{tag.includes("Javascript") && (
												<div className="techBg">
													<img src={images.javascript} alt="" />
												</div>
											)}
										</>
									))}
								</div>
							</motion.div>
						</motion.div>
					</div>
				</main>
			) : (
				"kljlkj"
			)}{" "}
		</div>
	);
};

export default Project;
