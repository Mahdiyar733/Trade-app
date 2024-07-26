/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Box, ScrollArea, Flex, Tooltip } from "@radix-ui/themes";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		function load() {
			setTimeout(() => {
				setIsLoading(false);
			}, 990);
		}
		load();
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className="w-screen overflow-x-hidden flex items-center flex-col font-Inter  bg-BG sm:flex-row-reverse sm:gap-7 ">
					<Facts />
					<Main />
				</div>
			)}
		</>
	);
}

function Loader() {
	return (
		<div className="flex h-screen w-screen justify-center items-center z-30 bg-BG top-0 left-0 right-0 bottom-0 fixed">
			<div className="text-5xl flex justify-center items-center h-16 text-WHITE ">
				<div className="spinner"></div>
			</div>
		</div>
	);
}

function Main() {
	return (
		<div className="w-full h-dvh flex flex-col justify-center items-center py-12 px-6 sm:px-9 sm:pr-0 min-h-[670px]">
			<div className="w-full flex flex-col h-full gap-4">
				<CurrHeader />
				<FactsBtn />
				<AlphabetRanking />
				<CymbalRanking />
				<DetailsPercent />
				<DigitalScore />
			</div>
		</div>
	);
}

function Facts() {
	return (
		<div className="animate-fade-up h-dvh w-full max-h-[1024px] self-start hidden sm:flex justify-center items-center py-12 pl-0 pr-9 min-h-[670px]">
			<FactsDetails />
		</div>
	);
}

function CurrHeader() {
	return (
		<div className="animate-fade-down animate-duration-1000 bg-green-200 flex items-center flex-[2] justify-center rounded-lg min-w-60 w-full sm:flex-[2]">
			<p className="text-black text-2xl font-bold">Java</p>
		</div>
	);
}

function FactsBtn() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleIsOpen() {
		setModalIsOpen((isOpen) => !isOpen);
	}

	return (
		<>
			{!modalIsOpen ? "" : <FactsModal handler={handleIsOpen} />}
			<Btn
				color="BG"
				handler={handleIsOpen}>
				Facts
			</Btn>
		</>
	);
}

function Btn({ color, handler, size = "md", children }) {
	return (
		<button
			className={`animate-fade-right animate-delay-700 btn btn-${size} sm:hidden border-WHITE text-WHITE bg-${color} py-0 w-full font-Poppins flex justify-center items-center`}
			onClick={handler}>
			<span className="flex items-center justify-center text-center text-2xl leading-none">
				{children}
			</span>
		</button>
	);
}

function FactsModal({ handler }) {
	return (
		<div className="animate-fade-left animate-duration-500 flex flex-col-reverse gap-3 items-center justify-center w-screen h-screen absolute top-0 right-0 left-0 bottom-0 bg-BG p-9 z-20 sm:hidden">
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

function FactsDetails() {
	return (
		<div className="border-2 border-solid border-WHITE rounded-lg w-full h-full px-4 items-center py-10 gap-6 flex flex-col">
			<h1 className="font-Inter font-bold text-WHITE text-5xl text-center">
				FACTS
			</h1>
			<ScrollArea
				type="auto"
				scrollbars="vertical"
				style={{ height: "90%" }}>
				<Box
					p="2"
					pr="3">
					<Flex
						direction="column"
						gap="2">
						<div className="w-full text-base md:text-xl flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-WHITE">
							<span>since of :</span>
							<Tooltip content="Good">
								<span className="p-1 text-BG bg-YELLOW rounded-md">2021</span>
							</Tooltip>
						</div>
						<div className="w-full text-base md:text-xl flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-WHITE">
							<span>Technology :</span>
							<Tooltip content="Very good">
								<span className="p-1 text-BG bg-GREEN rounded-md">
									Fairgas, Dex
								</span>
							</Tooltip>
						</div>
						<div className="w-full text-base md:text-xl flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-WHITE">
							<span>Marketcup :</span>
							<Tooltip content="Very good">
								<span className="p-1 text-BG bg-GREEN rounded-md">500M</span>
							</Tooltip>
						</div>
						<div className="w-full text-base md:text-xl flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-WHITE">
							<span>Maxsupply :</span>
							<Tooltip content="Good">
								<span className="p-1 text-BG bg-YELLOW rounded-md">
									Definate
								</span>
							</Tooltip>
						</div>
						<div className="w-full text-base md:text-xl flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-WHITE">
							<span>Exchangelist :</span>
							<Tooltip content="Not bad">
								<span className="p-1 text-BG bg-ORNG rounded-md">C BYB4</span>
							</Tooltip>
						</div>
						<div className="w-full text-base md:text-xl flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-WHITE">
							<span>Community :</span>
							<Tooltip content="Very good">
								<span className="p-1 text-BG bg-GREEN rounded-md">1.9M</span>
							</Tooltip>
						</div>
						<div className="w-full text-base md:text-xl flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-WHITE">
							<span>Decentralize :</span>
							<Tooltip content="Bad">
								<span className="p-1 text-BG rounded-md bg-RED">
									1.6M Holder
								</span>
							</Tooltip>
						</div>
						<div className="w-full text-base md:text-xl flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-WHITE">
							<span>since of :</span>
							<Tooltip content="Not bad">
								<span className="p-1 text-BG rounded-md bg-ORNG">2021</span>
							</Tooltip>
						</div>
						<div className="w-full text-base md:text-xl flex flex-row justify-between items-center py-2 font-Poppins font-semibold text-WHITE">
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

function AlphabetRanking() {
	return (
		<div className="animate-fade-left animate-delay-1000 w-full flex-row flex flex-1 overflow-hidden rounded-lg">
			<div className="bg-[#E92B2B] flex justify-center items-center flex-1 border-r border-solid border-BG relative ">
				<span className="font-bold text-2xl text-black text-center">F</span>
			</div>
			<div className="bg-[#F97A1F] flex justify-center items-center flex-1 border-x border-solid border-BG relative ">
				<span className="font-bold text-2xl text-black text-center">C</span>
			</div>
			<div className="bg-[#D9D9D9] flex justify-center items-center flex-1 border-x border-solid border-BG relative ">
				<span className="font-bold text-2xl text-black text-center">B</span>
			</div>
			<div className="bg-[#EEF226] flex justify-center items-center flex-[2] border-x border-solid border-BG relative">
				<span className="font-bold text-2xl text-black text-center border-b-2 border-solid border-BG w-2/6 h-5/6 flex justify-center items-center">
					A
				</span>
			</div>
			<div className="bg-[#37FF33] flex justify-center items-center flex-1 border-l border-solid border-BG relative ">
				<span className="font-bold text-2xl text-black text-center">S</span>
			</div>
		</div>
	);
}

function CymbalRanking() {
	return (
		<div className="animate-fade-left animate-delay-[1300ms] w-full flex flex-[2]  bg-gray-300 rounded-lg sm:flex-[3]">
			a
		</div>
	);
}

function DetailsPercent() {
	return (
		<div className="animate-fade-right animate-delay-[1600ms] flex flex-col w-full flex-1 items-center justify-center py-2 font-Poppins sm:gap-2">
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
			<div className="px-10 py-1 mt-2 border-y border-solid border-WHITE items-center justify-center flex ">
				<span className="text-xl font-semibold text-WHITE font-Poppins">
					Score 8
				</span>
			</div>
		</div>
	);
}

function DetailsPercentRow({ name = "Default", per = "0" }) {
	return (
		<div className="flex flex-row w-full items-center justify-between gap-3 text-xl flex-1">
			<span className="text-WHITE font-normal text-nowrap">{name} : </span>
			{/* <div className="h-4 bg-slate-400 rounded-full w-5/6"></div> */}
			<progress
				className="progress h-3 progress-secondary"
				value={per}
				max="100"></progress>
			<span className="text-WHITE font-normal text-nowrap">{per} %</span>
		</div>
	);
}

function DigitalScore() {
	return (
		<div className="animate-fade-down animate-delay-[1900ms] w-full py-2 relative rounded-lg bg-WHITE flex flex-row items-center flex-1  gap-7 justify-center">
			<span className="text-BG text-base font-semibold font-Poppins sm:text-xl md:2xl">
				Digital gold :
			</span>
			<strong className="text-BG text-xl font-semibold font-Poppins sm:2xl md:text-3xl">
				64
			</strong>
		</div>
	);
}

export default App;
