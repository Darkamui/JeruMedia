import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import "./App.scss";
import Home from "./container/Home";

const App = () => (
	<Router>
		<Navbar />

		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</Router>
);

export default App;
