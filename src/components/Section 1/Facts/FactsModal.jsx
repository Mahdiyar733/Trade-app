/* eslint-disable react/prop-types */
import { FactsDetails } from "./FactsDetails";
import { Btn } from "../../utilities/Btn/Btn";

export function FactsModal({ handler }) {
	return (
		<div className="animate-fade-left animate-duration-500 flex flex-col-reverse items-center justify-center w-screen h-dvh absolute top-0 right-0 left-0  bg-BG p-9 z-20 sm:hidden">
			<Btn
				color="RED"
				handler={handler}
				size="md">
				Close
			</Btn>
			<FactsDetails />
		</div>
	);
}
