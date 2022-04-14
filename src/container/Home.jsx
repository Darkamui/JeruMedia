import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from ".";
import { Navbar } from "../components";

const Home = () => {
	return (
		<>
			<Header />
			<About />
			<Work />

			<Skills />
			<Testimonial />
			<Footer />
		</>
	);
};

export default Home;
