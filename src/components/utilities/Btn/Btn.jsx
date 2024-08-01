export function Btn({ color, handler, size = "md", children }) {
	return (
		<button
			className={`animate-fade-up animate-delay-100 animate-ease-out btn btn-${size} sm:hidden border-WHITE text-WHITE bg-${color} py-0 w-full font-Poppins flex justify-center items-center`}
			onClick={handler}>
			<span className="flex items-center justify-center text-center text-2xl leading-none">
				{children}
			</span>
		</button>
	);
}
