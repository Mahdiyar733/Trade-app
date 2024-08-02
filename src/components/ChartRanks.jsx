"use client";

import {
	Bar,
	BarChart,
	CartesianGrid,
	LabelList,
	XAxis,
	YAxis,
} from "recharts";

import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
	{ month: "January", High: 54, mobile: 80 },
	{ month: "February", High: 34, mobile: 200 },
	{ month: "March", High: 45, mobile: 120 },
	{ month: "April", High: 56, mobile: 190 },
	{ month: "May", High: 66, mobile: 130 },
	{ month: "June", High: 44, mobile: 140 },
];

const chartConfig = {
	High: {
		label: "High",
		color: "hsl(var(--chart-1))",
	},
	mobile: {
		label: "Mobile",
		color: "hsl(var(--chart-2))",
	},
	label: {
		color: "hsl(var(--background))",
	},
};

export function ChartRank() {
	return (
		<ChartContainer
			className="w-full overflow-auto"
			config={chartConfig}>
			<BarChart
				accessibilityLayer
				data={chartData}
				layout="vertical"
				className="overflow-auto"
				margin={{
					right: 16,
				}}>
				<CartesianGrid horizontal={false} />
				<YAxis
					dataKey="month"
					type="category"
					tickLine={false}
					tickMargin={10}
					axisLine={false}
					tickFormatter={(value) => value.slice(0, 3)}
					hide
				/>
				<XAxis
					dataKey="High"
					type="number"
					hide
				/>
				<ChartTooltip
					cursor={false}
					content={<ChartTooltipContent indicator="line" />}
				/>
				<Bar
					dataKey="High"
					layout="vertical"
					className="fill-primary"
					radius={4}>
					<LabelList
						dataKey="month"
						position="insideLeft"
						offset={8}
						className="fill-[--color-label]"
						fontSize={12}
					/>
					<LabelList
						dataKey="High"
						position="right"
						offset={8}
						className="fill-foreground"
						fontSize={12}
					/>
				</Bar>
			</BarChart>
		</ChartContainer>
	);
}
