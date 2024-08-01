/* eslint-disable react/prop-types */
export function DetailsPercentRow({ name = "Default", per = "0" }) {
	return (
		<div className="flex flex-row w-full items-center justify-between gap-3 text-xl flex-1 text-nowrap flex-nowrap">
			<span className="text-WHITE font-normal text-nowrap text-base sm:text-xl">
				{name} :
			</span>
			<progress
				className="progress h-2 sm:h-3 progress-secondary w-5/6"
				value={per}
				max="100"></progress>
			<span className="text-WHITE font-normal text-nowrap">{per} %</span>
		</div>
	);
}
