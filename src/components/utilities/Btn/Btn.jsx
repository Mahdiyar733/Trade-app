/* eslint-disable react/prop-types */
export function Btn({
	bgColor,
	handler,
	size = "md",
	children,
	color = "WHITE",
	svg,
}) {
	return (
		<button
			style={{ color: color, borderColor: color, backgroundColor: bgColor }}
			className={`animate-fade-up animate-delay-100 animate-ease-out btn btn-${size} sm:hidden py-0 w-full font-bold font-Inter flex justify-center items-center`}
			onClick={handler}>
			{svg}
			<span className="flex items-center justify-center text-center text-2xl leading-none">
				{children}
			</span>
		</button>
	);
}
