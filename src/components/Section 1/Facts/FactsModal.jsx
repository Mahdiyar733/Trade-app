/* eslint-disable react/prop-types */
import { FactsDetails } from "./FactsDetails";
import { Btn } from "../../utilities/Btn/Btn";
import CloseSvg from "../../../svg/CloseSvg";

export function FactsModal({ handler }) {
	return (
		<div className="animate-fade-down animate-ease-out animate-duration-500 flex flex-col-reverse items-center justify-center w-screen h-dvh fixed bottom-0 top-0 right-0 left-0 bg-BG py-16 gap-2 px-9 z-20 sm:hidden">
			<Btn
				color="white"
				bgColor="RED"
				handler={handler}
				size="md"
				svg={<CloseSvg color="white" />}>
				Close
			</Btn>
			<FactsDetails />
		</div>
	);
}
