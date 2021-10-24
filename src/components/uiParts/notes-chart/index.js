import React, { useCallback, useState } from "react";
import "./index.scss";
import * as constants from "~/constants.js";

import {
	PieChart,
	Pie,
	Sector,
	Legend,
	ResponsiveContainer,
	Cell,
} from "recharts";
import { Card } from "semantic-ui-react";

const COLORS = [
	"#ACA8A7",
	"#E8614D",
	"#FF795C",
	"#FF8042",
	"#FF8963",
	"#FFA56F",
	"#FFB778",
	"#FFD284",
	"#A0DD96",
	"#00BFA6",
];

const renderActiveShape = (props) => {
	const {
		cx,
		cy,
		innerRadius,
		outerRadius,
		startAngle,
		endAngle,
		fill,
		payload,
	} = props;
	return (
		<>
			<text
				x={cx}
				y={cy - 10}
				dy={8}
				textAnchor="middle"
				fill={fill}
				fontSize={17}
			>
				{payload.name}
			</text>
			<text
				x={cx}
				y={cy + 10}
				dy={8}
				textAnchor="middle"
				fill={fill}
				fontSize={17}
			>
				{payload.value}件
			</text>
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius - 2}
				outerRadius={outerRadius + 2}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
		</>
	);
};

export default function NotesChart(props) {
	const [activeIndex, setActiveIndex] = useState(-1);

	const onPieEnter = useCallback(
		(_, index) => {
			setActiveIndex(index);
		},
		[setActiveIndex]
	);

	const onPieLeave = useCallback(() => {
		setActiveIndex(-1);
	}, [setActiveIndex]);

	var dataArray = [
		{ name: "不明", value: 0 },
		{ name: "40℃以上", value: 0 },
		{ name: "39.5~39.9℃", value: 0 },
		{ name: "39.0~39.4℃", value: 0 },
		{ name: "38.5~38.9℃", value: 0 },
		{ name: "38.0~38.4℃", value: 0 },
		{ name: "37.5~37.9℃", value: 0 },
		{ name: "37.0~37.4℃", value: 0 },
		{ name: "36.9℃以下", value: 0 },
		{ name: "発熱なしのため未検温", value: 0 },
	];

	if (props.temperatureDataList) {
		props.temperatureDataList.map((temperatureData) => {
			if (temperatureData.num) {
				constants.MAX_TEMPERATURE[temperatureData.num]
					? (temperatureData.name =
							constants.MAX_TEMPERATURE[temperatureData.num])
					: (temperatureData.name = "不明");
			} else {
				temperatureData.name = "不明";
			}
			dataArray.map((data, index) => {
				if (data.name == temperatureData.name) {
					dataArray[index].value = temperatureData.count;
				}
			});
		});
	}

	return (
		<Card raised>
			<Card.Content>
				<Card.Header>{props.title}</Card.Header>
				<ResponsiveContainer
					className="notes-chart"
					width={"100%"}
					height={400}
				>
					<PieChart>
						<Pie
							activeIndex={activeIndex}
							activeShape={renderActiveShape}
							data={dataArray}
							cx={"50%"}
							cy={"50%"}
							startAngle={0}
							endAngle={360}
							innerRadius={70}
							outerRadius={100}
							fill="#8884d8"
							dataKey="value"
							onMouseEnter={onPieEnter}
							onMouseLeave={onPieLeave}
						>
							{dataArray.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</Card.Content>
		</Card>
	);
}
