import { Box, ScrollArea, Flex, Tooltip } from "@radix-ui/themes";

export function FactsDetails() {
	return (
		<div className="border-2 border-solid border-primary rounded-lg w-full h-full px-4 items-center py-10 gap-6 flex flex-col">
			<h1 className=" font-Inter font-bold text-prim2 text-5xl text-center">
				FcAs
			</h1>
			<ScrollArea
				className="border-t border-solid border-primary"
				type="auto"
				scrollbars="vertical"
				style={{ height: "90%" }}>
				<Box
					p="2"
					pr="3">
					<Flex
						direction="column"
						gap="2">
						<div className="w-full text-base sm:text-xs md:text-base text-nowrap flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-prim2">
							<span>since of :</span>
							<Tooltip content="Good">
								<span className="p-1 text-BG bg-YELLOW rounded-md">2021</span>
							</Tooltip>
						</div>
						<div className="w-full text-base sm:text-xs md:text-base text-nowrap flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-prim2">
							<span>Technology :</span>
							<Tooltip content="Very good">
								<span className="p-1 text-BG bg-GREEN rounded-md">
									Fairgas, Dex
								</span>
							</Tooltip>
						</div>
						<div className="w-full text-base sm:text-xs md:text-base text-nowrap flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-prim2">
							<span>Marketcup :</span>
							<Tooltip content="Very good">
								<span className="p-1 text-BG bg-GREEN rounded-md">500M</span>
							</Tooltip>
						</div>
						<div className="w-full text-base sm:text-xs md:text-base text-nowrap flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-prim2">
							<span>Maxsupply :</span>
							<Tooltip content="Good">
								<span className="p-1 text-BG bg-YELLOW rounded-md">
									Definate
								</span>
							</Tooltip>
						</div>
						<div className="w-full text-base sm:text-xs md:text-base text-nowrap flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-prim2">
							<span>Exchangelist :</span>
							<Tooltip content="Not bad">
								<span className="p-1 text-BG bg-ORNG rounded-md">C BYB4</span>
							</Tooltip>
						</div>
						<div className="w-full text-base sm:text-xs md:text-base text-nowrap flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-prim2">
							<span>Community :</span>
							<Tooltip content="Very good">
								<span className="p-1 text-BG bg-GREEN rounded-md">1.9M</span>
							</Tooltip>
						</div>
						<div className="w-full text-base sm:text-xs md:text-base text-nowrap flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-prim2">
							<span>Decentralize :</span>
							<Tooltip content="Bad">
								<span className="p-1 text-BG rounded-md bg-RED">
									1.6M Holder
								</span>
							</Tooltip>
						</div>
						<div className="w-full text-base sm:text-xs md:text-base text-nowrap flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-prim2">
							<span>since of :</span>
							<Tooltip content="Not bad">
								<span className="p-1 text-BG rounded-md bg-ORNG">2021</span>
							</Tooltip>
						</div>
						<div className="w-full text-base sm:text-xs md:text-base text-nowrap flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-prim2">
							<span>Security :</span>
							<Tooltip content="Very good">
								<span className="p-1 text-BG rounded-md bg-GREEN">99Dex</span>
							</Tooltip>
						</div>
					</Flex>
				</Box>
			</ScrollArea>
			<div className="w-full flex flex-row justify-center gap-2 items-center h-[10%] font-Poppins">
				<span className="text-xl py-2 rounded-lg px-4 bg-RED font-Poppins font-semibold">
					-1
				</span>
				<span className="text-xl py-2 rounded-lg px-4 bg-GREEN font-Poppins font-semibold">
					+8
				</span>
			</div>
		</div>
	);
}
