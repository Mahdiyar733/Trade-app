/* eslint-disable react/prop-types */
import VechainSvg from "../../../svg/VechainSvg";

export function CurrHeader({ colors }) {
	const { color1, color2 } = colors;

	return (
		<div
			style={{ backgroundColor: color2, borderColor: color1 }}
			className={`animate-fade-down animate-duration-1000 border-[4px] border-solid flex items-center flex-[2] justify-center rounded-lg min-w-60 w-full sm:flex-[2]`}>
			<VechainSvg color={color1} />
		</div>
	);
}
