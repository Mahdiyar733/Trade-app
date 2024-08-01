import { DetailsPercentRow } from "./DetailsPercentRow";
import Score from "./Score";

export function DetailsPercent() {
	return (
		<div className="animate-fade-right animate-delay-[1600ms] flex flex-col w-full flex-1 items-center justify-center py-2 font-Poppins sm:gap-2 flex-nowrap text-nowrap sm:py-0 sm:justify-between sm:h-full">
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
			<Score />
		</div>
	);
}
