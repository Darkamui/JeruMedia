import React from "react";
import { useLocation } from "react-router-dom";
import { urlFor } from "../client";
import "./Project.scss";
import { images } from "../constants";

const Project = () => {
	const { state } = useLocation();
	return (
		<div>
			{state ? (
				<main id="project">
					<div className="projectContainer">
						<h3>{state.work.title}</h3>
						<img src={urlFor(state.work.imgUrl)} alt="" />
						<div className="projectContent">
							<div className="left">
								<h4>Project Overview</h4>
								<p>{state.work.description}</p>
							</div>
							<div className="right">
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
											{/* {tag.includes("Laravel") && (
												<div className="techBg">
													<img src={images.laravel} alt="" />
												</div>
											)}
											{tag.includes("Laravel") && (
												<div className="techBg">
													<img src={images.laravel} alt="" />
												</div>
											)} */}
										</>
									))}
								</div>
							</div>
						</div>
					</div>
				</main>
			) : (
				"kljlkj"
			)}{" "}
		</div>
	);
};

export default Project;
