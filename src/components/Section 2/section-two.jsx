/* eslint-disable react/prop-types */
import { DetailsPercent } from "./DetailsPercent/DetailsPercent";
import ScoreBadge from "./ScoreBadge/ScoreBadge";

function SectionTwo() {
	return (
		<div className="w-full bg-BG flex flex-col-reverse justify-center sm:flex-row items-center px-6 pt-0 pb-8 sm:px-9 sm:gap-4 gap-3">
			<div className="flex items-center justify-center w-full sm:w-2/6">
				<ScoreBadge />
			</div>
			<DetailsPercent />
		</div>
	);
}

export default SectionTwo;
