/* eslint-disable react/prop-types */
import { CymbalRanking } from "../CymbalRank/CymbalRanking";
import { AlphabetRanking } from "../AlphabetRank/AlphabetRanking";
import { FactsBtn } from "../Facts/FactsBtn";
import { CurrHeader } from "../HeaderCurr/CurrHeader";

export function Main({ colors }) {
	return (
		<div className="w-full h-dvh flex flex-col justify-center items-center py-12 sm:pb-12 pb-9 px-6 sm:px-9 sm:pr-0 min-h-[670px] max-h-[1024px]">
			<div className="w-full flex flex-col h-full gap-6">
				<CurrHeader colors={colors} />
				<FactsBtn />
				<AlphabetRanking />
				<CymbalRanking />
			</div>
		</div>
	);
}
