import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	useEffect(() => {
		const query = '*[_type == "works"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};

	return (
		<>
			<h2 className="head-text">
				Our <span>Portfolio</span>
			</h2>

			<div className="app__work-filter">
				{["FullStack", "Frontend", "Mobile", "All"].map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? "item-active" : ""
						}`}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{filterWork.map((work, index) => (
					<div key={index} className="appWorkContainer">
						<div className="bgWorkOverlay"></div>
						<div className="hrWork"></div>
						<div className="middleWork">
							<h4 className="h4Work">{work.title}</h4>
							<p className="pWork">{work.description}</p>
							<div className="workActionBtns">
								<div className="leftActionBtns">
									{work.projectLink && (
										<a
											href={work.projectLink}
											target="_blank"
											rel="noreferrer"
											className="actionBtnProject"
										>
											view project
											<i className="fa-solid fa-arrow-up-right-from-square"></i>
										</a>
									)}
									{work.codeLink && (
										<a href={work.codeLink} target="_blank" rel="noreferrer">
											github <i className="fa-brands fa-github"></i>
										</a>
									)}
								</div>
								<div className="rightActionBtns">
									{work.tags.map((tag, index) => (
										<span key={index}>{tag}</span>
									))}
								</div>
							</div>
						</div>
						<img src={urlFor(work.imgUrl)} alt="" />
					</div>
				))}
			</motion.div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Work, "app__works"),
	"work",
	"app__primarybg"
);
