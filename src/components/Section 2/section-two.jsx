/* eslint-disable react/prop-types */
import { ChartCurr } from "../Chart";
import { DetailsPercent } from "./DetailsPercent/DetailsPercent";
import ScoreBadge from "./ScoreBadge/ScoreBadge";

function SectionTwo({ colors }) {
	return (
		<>
			<div className="w-full bg-BG flex flex-col-reverse justify-center sm:flex-row items-center px-6 pt-0 pb-8 sm:px-9 sm:gap-4 gap-3">
				<div className="flex items-center justify-center w-full sm:w-2/6">
					<ScoreBadge />
				</div>
				<DetailsPercent />
			</div>
			<div className="flex flex-col md:flex-row-reverse bg-BG w-full gap-2 px-6 sm:px-9">
				<div className="flex flex-col items-center flex-1 gap-4">
					<ChartCurr colors={colors} />
					<button className="btn btn-outline btn-secondary p-4 w-full">
						hey
					</button>
					<button className="btn btn-outline btn-info p-4 w-full">Bye</button>
				</div>
				<div className="flex flex-col items-center flex-1">
					<div className="w-full py-2 bg-blue-200">s</div>
				</div>
			</div>
		</>
	);
}

export default SectionTwo;
