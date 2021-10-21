// import "./styles.css";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Legend } from "recharts";
import { Card, Header } from "semantic-ui-react";

const data = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 },
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
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
				{payload.name}
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

export default function NoteChart() {
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

	return (
		<Card raised>
			<Card.Content>
				<Card.Header>モデルナ(2回目)接種後の体温</Card.Header>
				<PieChart width={400} height={400}>
					<Pie
						activeIndex={activeIndex}
						activeShape={renderActiveShape}
						data={data}
						cx={200}
						cy={200}
						innerRadius={60}
						outerRadius={80}
						fill="#8884d8"
						dataKey="value"
						onMouseEnter={onPieEnter}
						onMouseLeave={onPieLeave}
					/>
					<Legend />
				</PieChart>
			</Card.Content>
		</Card>
	);
}
