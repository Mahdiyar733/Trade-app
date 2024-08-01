/* eslint-disable react/prop-types */
import { DetailsPercent } from "./DetailsPercent/DetailsPercent";
import { DigitalScore } from "./DigitalScore/DigitalScore";
import ScoreBadge from "./ScoreBadge/ScoreBadge";

function SectionTwo() {
	return (
		<div className="w-full h-56 bg-BG flex flex-col justify-center sm:flex-row items-center px-6 pt-0 pb-8 sm:px-9 sm:gap-4">
			<div className="flex flex-col h-full items-center justify-center gap-2 flex-1">
				<DigitalScore />
				<ScoreBadge />
			</div>
			<DetailsPercent />
		</div>
	);
}

export default SectionTwo;
