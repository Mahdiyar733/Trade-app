import { Facts } from "./Facts/Facts";
import { Main } from "./Main/Main";
function SectionOne() {
	return (
		<div className="w-screen overflow-x-hidden flex items-center flex-col font-Inter  bg-BG sm:flex-row-reverse sm:gap-7 ">
			<Facts />
			<Main />
		</div>
	);
}

export default SectionOne;
