import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};
	useEffect(() => {
		const query = '*[_type == "works"]';

		client.fetch(query).then((data) => {
			setWorks(data);
			setFilterWork(data);
		});
	}, []);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setCurrentIndex(0);
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
			{filterWork.length && (
				<motion.div
					animate={animateCard}
					transition={{ duration: 0.5, delayChildren: 0.5 }}
					className="app__work-portfolio"
				>
					<div className="appWorkContainer">
						<div className="bgWorkOverlay"></div>
						<div className="hrWork"></div>
						<div className="middleWork">
							<h4 className="h4Work">{filterWork[currentIndex].title}</h4>
							<p className="pWork">{filterWork[currentIndex].description}</p>
							<div className="workActionBtns">
								<div className="leftActionBtns">
									{filterWork[currentIndex].projectLink && (
										<a
											href={filterWork[currentIndex].projectLink}
											target="_blank"
											rel="noreferrer"
											className="actionBtnProject"
										>
											view project
											<i className="fa-solid fa-arrow-up-right-from-square"></i>
										</a>
									)}
									{filterWork[currentIndex].codeLink && (
										<a
											href={filterWork[currentIndex].codeLink}
											target="_blank"
											rel="noreferrer"
										>
											github <i className="fa-brands fa-github"></i>
										</a>
									)}
								</div>
								<div className="rightActionBtns">
									{filterWork[currentIndex].tags.map((tag, index) => (
										<span key={index}>{tag}</span>
									))}
								</div>
							</div>
						</div>
						<img src={urlFor(filterWork[currentIndex].imgUrl)} alt="" />
					</div>
					{
						<div>
							{currentIndex + 1} of {filterWork.length}
						</div>
					}

					<div className="app__testimonial-btns app__flex">
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === 0 ? filterWork.length - 1 : currentIndex - 1
								)
							}
						>
							<HiChevronLeft />
						</div>

						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === filterWork.length - 1 ? 0 : currentIndex + 1
								)
							}
						>
							<HiChevronRight />
						</div>
					</div>
				</motion.div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Work, "app__works"),
	"work",
	"app__primarybg"
);
