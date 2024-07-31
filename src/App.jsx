/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Loader } from "./components/utilities/Loader/Loader";
import SectionOne from "./components/Section 1/section-one";
import SectionTwo from "./components/Section 2/section-two";

function App() {
	const [isLoading, setIsLoading] = useState(true);

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
					<SectionOne />
					<SectionTwo />
				</>
			)}
		</>
	);
}

export default App;
