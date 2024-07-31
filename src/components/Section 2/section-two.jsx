import { DetailsPercent } from "./DetailsPercent/DetailsPercent";
import { DigitalScore } from "./DigitalScore/DigitalScore";

function SectionTwo() {
	return (
		<div className="w-full bg-BG flex flex-col items-center px-6 pt-0 pb-8 sm:px-9">
			<DetailsPercent />
			<DigitalScore />
		</div>
	);
}

export default SectionTwo;
