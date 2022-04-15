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
					// <div className="app__work-item app__flex" key={index}>
					// 	<div className="app__work-img app__flex">
					// 		<img src={urlFor(work.imgUrl)} alt={work.name} />

					// 		<motion.div
					// 			whileHover={{ opacity: [0, 1] }}
					// 			transition={{
					// 				duration: 0.25,
					// 				ease: "easeInOut",
					// 				staggerChildren: 0.5,
					// 			}}
					// 			className="app__work-hover app__flex"
					// 		>
					// 			{!work.tags.includes("Mobile") && (
					// 				<a href={work.projectLink} target="_blank" rel="noreferrer">
					// 					<motion.div
					// 						whileInView={{ scale: [0, 1] }}
					// 						whileHover={{ scale: [1, 0.9] }}
					// 						transition={{ duration: 0.25 }}
					// 						className="app__flex"
					// 					>
					// 						<AiFillEye />
					// 					</motion.div>
					// 				</a>
					// 			)}

					// 			<a href={work.codeLink} target="_blank" rel="noreferrer">
					// 				<motion.div
					// 					whileInView={{ scale: [0, 1] }}
					// 					whileHover={{ scale: [1, 0.9] }}
					// 					transition={{ duration: 0.25 }}
					// 					className="app__flex"
					// 				>
					// 					<AiFillGithub />
					// 				</motion.div>
					// 			</a>
					// 		</motion.div>
					// 	</div>

					// 	<div className="app__work-content app__flex">
					// 		<h4 className="bold-text">{work.title}</h4>
					// 		<p className="p-text" style={{ marginTop: 10 }}>
					// 			{work.description}
					// 		</p>

					// 		<div className="app__work-tag app__flex">
					// 			<p className="p-text">{work.tags[0]}</p>
					// 		</div>
					// 	</div>
					// 	<div className="detailAction">
					// 		<Link
					// 			to={{ pathname: `/${work.title}`, state: { work: work } }}
					// 			className="app__work-btn"
					// 			state={{ work: work }}
					// 		>
					// 			More Details
					// 		</Link>
					// 		<Link
					// 			to={{ pathname: `/${work.title}`, state: { work: work } }}
					// 			state={{ work: work }}
					// 		>
					// 			<AiOutlineDoubleRight
					// 				size={"1.5rem"}
					// 				style={{ color: "#7980c9", marginTop: ".5rem" }}
					// 			/>
					// 		</Link>
					// 	</div>
					// </div>
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
