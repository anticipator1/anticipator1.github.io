import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { datas } from "./data/fakeData";
import Card from "./components/Card";

function App() {
	return (
		<div className="md:m-10 m-2">
			<h1 className="font-raleway text-2xl font-bold leading-10 text-center md:text-left md:text-4xl">
				CITIES TO VISIT IN EUROPE
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{datas.map((item, index) => (
					<Card key={index} item={item} />
				))}
			</div>
		</div>
	);
}

export default App;
