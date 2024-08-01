/* eslint-disable react/prop-types */
export function DetailsPercentRow({ name = "Default", per = "0" }) {
	return (
		<div className="flex flex-row w-full items-center justify-between gap-3 flex-1 text-nowrap flex-nowrap text-sm sm:text-base md:text-xl">
			<span className="text-WHITE font-normal text-nowrap  flex-1">
				{name} :
			</span>
			<progress
				className="progress h-2 sm:h-3 progress-primary flex-2"
				value={per}
				max="100"></progress>
			<span className="text-WHITE font-normal text-nowrap flex-1">{per} %</span>
		</div>
	);
}
