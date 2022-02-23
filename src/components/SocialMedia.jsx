import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
	<div className="app__social">
		<a
			href="https://www.linkedin.com/in/daniel-j-83913a1ab/"
			target="_blank"
			rel="noopener noreferer"
		>
			<div>
				<BsLinkedin />
			</div>
		</a>
		<a
			href="https://github.com/Darkamui"
			target="_blank"
			rel="noopener noreferer"
		>
			<div>
				<BsGithub />
			</div>
		</a>
	</div>
);

export default SocialMedia;
