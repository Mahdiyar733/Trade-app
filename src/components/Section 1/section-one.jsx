/* eslint-disable react/prop-types */
import { Facts } from "./Facts/Facts";
import { Main } from "./Main/Main";
function SectionOne({ colors }) {
	return (
		<div className="w-screen overflow-x-hidden flex items-center flex-col font-Inter  bg-BG sm:flex-row-reverse sm:gap-7 ">
			<Facts />
			<Main colors={colors} />
		</div>
	);
}

export default SectionOne;
