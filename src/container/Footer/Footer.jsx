import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();
	const { username, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: formData.username,
			email: formData.email,
			message: formData.message,
		};

		client
			.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<h2 className="head-text" style={{ marginBottom: "3rem" }}>
				<span>{t("chatSpan")}</span> {t("chatText")}
			</h2>

			<div className="app__secondary-flex">
				<motion.img
					whileInView={{ rotate: [2.5, -2.5, 2.5], opacity: [1, 0.5, 1] }}
					transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
					className="svgTest"
					src={images.contact}
					alt=""
				/>
				{!isFormSubmitted ? (
					<div className="app__footer-form ">
						<div className="app__flex">
							<input
								className="p-text"
								type="text"
								placeholder={t("name")}
								name="username"
								value={username}
								onChange={handleChangeInput}
							/>
						</div>
						<div className="app__flex">
							<input
								className="p-text"
								type="email"
								placeholder={t("email")}
								name="email"
								value={email}
								onChange={handleChangeInput}
							/>
						</div>
						<div>
							<textarea
								className="p-text"
								placeholder={t("msg")}
								value={message}
								name="message"
								onChange={handleChangeInput}
							/>
						</div>
						{!loading ? (
							<button type="button" className="p-text" onClick={handleSubmit}>
								{t("sendMsg")}
							</button>
						) : (
							<button type="button" className="p-text" onClick={handleSubmit}>
								{t("sending")}
							</button>
						)}
					</div>
				) : (
					<div>
						<h3 className="head-text">{t("chatThx")}</h3>
					</div>
				)}
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__primarybg"
);
