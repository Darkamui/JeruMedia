import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import "./App.scss";
import Home from "./container/Home";
import Project from "./container/Project";

const App = () => (
	<Router>
		<Navbar />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/:projectName" element={<Project />} />
		</Routes>
	</Router>
);

export default App;
