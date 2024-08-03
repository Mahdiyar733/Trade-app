/* eslint-disable react/prop-types */
import CardRank from "../Card";
import { ChartCurr } from "../Chart";
import { ChartWave } from "../ChartWave";
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
			<div className="flex flex-col md:flex-row-reverse bg-BG w-full gap-7 px-6 sm:px-9 pb-4 ">
				<div className="flex flex-col items-center flex-1 gap-4">
					<ChartCurr colors={colors} />
					<CardRank />
				</div>
				<div className="flex flex-col items-center flex-1 h-full gap-4">
					<ChartWave colors={colors} />
					<div className="w-full h-10 bg-prim2 rounded-lg">s</div>
					<div className="aspect-video w-full p-4 rounded-lg bg-prim2 relative">
						<video
							width="full"
							height="full"
							className="rounded-lg"
							controls>
							<source
								src="https://tech.sabzlearn.ir/uploads/moein_b/php-api-dev/1_introductApiCourse.mp4?h=YALo9y_uq_XEyAFps2DfwQ&t=1722757347"
								type="video/mp4"
							/>
							Your browser does not support.
						</video>
					</div>
				</div>
			</div>
		</>
	);
}

export default SectionTwo;
