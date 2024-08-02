/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ month: "Techno", rate: 186 },
	{ month: "Abchain", rate: 305 },
	{ month: "Structer", rate: 237 },
	{ month: "Popularity", rate: 273 },
	{ month: "ECToken", rate: 209 },
	{ month: "Fanda", rate: 214 },
];

const chartConfig = {
	rate: {
		label: "Rate",
		color: "hsl(var(--chart-1))",
	},
};

export function ChartCurr({ colors }) {
	const { color1, color2 } = colors;
	return (
		<Card className="md:w-full w-full sm:w-5/6 bg-primary-content ">
			<CardHeader className="items-center pb-4 text-BG">
				<CardTitle className="font-bold font-Inter">Radar Chart</CardTitle>
				<CardDescription className="text-BG opacity-75">
					Showing total visitors for the last 6 months
				</CardDescription>
			</CardHeader>
			<CardContent className="pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-video max-h-[260px] text-primary ">
					<RadarChart
						data={chartData}
						className="fill-BG">
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLable />}
						/>
						<PolarGrid className="opacity-20 fill-primary" />
						<PolarAngleAxis
							dataKey="month"
							style={{
								stroke: "var(--fallback-p,oklch(var(--p)/0.5))",
								strokeOpacity: "0.5",
							}}
						/>
						<Radar
							dataKey="rate"
							className="fill-primary stroke-primary"
							fillOpacity={0.4}
						/>
					</RadarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				<div className="flex items-center gap-2  leading-none text-BG font-semibold">
					Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
				</div>
				<div className="flex items-center gap-2 leading-none opacity-70 text-BG">
					January - June 2024
				</div>
			</CardFooter>
		</Card>
	);
}
