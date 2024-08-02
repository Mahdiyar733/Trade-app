/* eslint-disable react/prop-types */
"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
} from "@/components/ui/chart";
const chartData = [
	{ month: "January", desktop: 186, mobile: 80 },
	{ month: "February", desktop: 305, mobile: 200 },
	{ month: "March", desktop: 237, mobile: 120 },
	{ month: "April", desktop: 73, mobile: 190 },
	{ month: "May", desktop: 209, mobile: 130 },
	{ month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "#B475D1",
	},
	mobile: {
		label: "Mobile",
		color: "green",
	},
};

export function ChartWave({ colors }) {
	const { color1, color2 } = colors;
	return (
		<Card className="md:w-full w-full sm:w-5/6 bg-prim2">
			<CardHeader>
				<CardTitle>Line Chart - Multiple</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="line" />}
						/>
						<ChartLegend
							content={<ChartLegendContent config={chartConfig} />}
						/>

						<Line
							dataKey="desktop"
							type="monotone"
							style={{ stroke: color1 }}
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey="mobile"
							type="monotone"
							strokeWidth={2}
							style={{ stroke: color2 }}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
