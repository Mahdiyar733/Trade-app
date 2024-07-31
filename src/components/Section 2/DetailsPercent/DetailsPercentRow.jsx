/* eslint-disable react/prop-types */
export function DetailsPercentRow({ name = "Default", per = "0" }) {
	return (
		<div className="flex flex-row w-full items-center justify-between gap-3 text-xl flex-1 text-nowrap">
			<span className="text-WHITE font-normal text-nowrap text-base sm:text-xl">
				{name} :{" "}
			</span>
			{/* <div className="h-4 bg-slate-400 rounded-full w-5/6"></div> */}
			<progress
				className="progress h-3 progress-secondary"
				value={per}
				max="100"></progress>
			<span className="text-WHITE font-normal text-nowrap">{per} %</span>
		</div>
	);
}
