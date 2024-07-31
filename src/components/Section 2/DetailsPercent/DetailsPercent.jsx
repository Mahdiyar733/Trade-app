import { DetailsPercentRow } from "./DetailsPercentRow";

export function DetailsPercent() {
	return (
		<div className="animate-fade-right animate-delay-[1600ms] flex flex-col w-full flex-1 items-center justify-center py-2 font-Poppins sm:gap-2 ">
			<DetailsPercentRow
				name="Techno"
				per="64"
			/>
			<DetailsPercentRow
				name="Anchain"
				per="50"
			/>
			<DetailsPercentRow
				name="Fanda"
				per="32"
			/>
			<DetailsPercentRow
				name="Structur"
				per="98"
			/>
			<DetailsPercentRow
				name="ECToken"
				per="70"
			/>
			<div className="px-10 py-2 mt-6 border-y border-solid border-WHITE items-center justify-center flex w-full">
				<span className="text-xl font-semibold text-WHITE font-Poppins">
					Score 8
				</span>
			</div>
		</div>
	);
}
