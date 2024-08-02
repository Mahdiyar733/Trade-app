/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Loader } from "./components/utilities/Loader/Loader";
import SectionOne from "./components/Section 1/section-one";
import SectionTwo from "./components/Section 2/section-two";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const colors = { color1: "#1768AC", color2: "#C5E063" };

	useEffect(() => {
		function load() {
			setTimeout(() => {
				setIsLoading(false);
			}, 990);
		}
		load();
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<SectionOne colors={colors} />
					<SectionTwo colors={colors} />
				</>
			)}
		</>
	);
}

export default App;
