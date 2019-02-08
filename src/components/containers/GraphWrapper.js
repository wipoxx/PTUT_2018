import React, { Component } from "react";
import { connect } from "react-redux";
import { Doughnut, HorizontalBar, Bar, Line } from "react-chartjs-2";

const backgroundColorData = [
	"#ffcccc",
	"#ff4d4d",
	"#fffa65",
	"#32ff7e",
	"#7efff5",
	"#18dcff",
	"#7d5fff",
	"#4b4b4b",
	"#cd84f1",
	"#ffcccc",
	"#ff4d4d",
	"#fffa65",
	"#32ff7e",
	"#7efff5",
	"#18dcff",
	"#7d5fff",
	"#4b4b4b",
	"#cd84f1",
	"#ffcccc",
	"#ff4d4d",
	"#fffa65",
	"#32ff7e",
	"#7efff5",
	"#18dcff",
	"#7d5fff",
	"#4b4b4b",
	"#cd84f1",
];
const hoverBackgroundColorData = [
	"#ffb8b8",
	"#ff4d4d",
	"#fff200",
	"#3ae374",
	"#67e6dc",
	"#17c0eb",
	"#7158e2",
	"#3d3d3d",
	"#c56cf0",
	"#ffb8b8",
	"#ff4d4d",
	"#fff200",
	"#3ae374",
	"#67e6dc",
	"#17c0eb",
	"#7158e2",
	"#3d3d3d",
	"#c56cf0",
	"#ffb8b8",
	"#ff4d4d",
	"#fff200",
	"#3ae374",
	"#67e6dc",
	"#17c0eb",
	"#7158e2",
	"#3d3d3d",
	"#c56cf0",
];

class GraphWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: this.props.isToggleOn,
		};
	}

	render() {
		return (
			<GraphShowing
				graphType={this.props.graphType}
				companiesStats={this.props.companiesStats}
				graphLabel={this.props.graphLabel}
			/>
		);
	}
}

function GraphShowing(props) {
	var graphComponent;
	var data, labels;
	var graphLabel = props.graphLabel;
	const dataList = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: graphLabel,
				data: [65, 59, 80, 81, 56, 55, 40],
				backgroundColor: "rgba(2, 171, 111,0.2)",
				hoverBackgroundColor: "rgba(2, 171, 111,1)",
			},
		],
	};
	switch (props.graphType) {
		case "Doughnut":
			data = props.data;
			labels = props.labels;

			const dataListDoughnut = {
				labels: props.companiesStats.activities.labels,
				datasets: [
					{
						label: props.graphLabel,
						data: props.companiesStats.activities.data,
						backgroundColor: backgroundColorData,
						hoverBackgroundColor: hoverBackgroundColorData,
					},
				],
			};
			graphComponent = (
				<Doughnut width={100} height={70} data={dataListDoughnut} />
			);
			break;
		case "HorizontalBar":
			graphComponent = (
				<HorizontalBar
					data={dataList}
					width={100}
					height={50}
					options={{
						maintainAspectRatio: false,
					}}
				/>
			);
			break;
		case "Bar":
			try {
				data = props.companiesStats.recensement.nb;
				labels = props.companiesStats.recensement.groupePersonnes;
				graphLabel =
					"Population de la commune (" +
					props.companiesStats.recensement.codePostal +
					")";
			} catch (error) {
				console.error("Bar graph: " + error);
			}
			const dataListHorBar = {
				labels: labels,
				datasets: [
					{
						label: graphLabel,
						data: data,
						backgroundColor: backgroundColorData,
						hoverBackgroundColor: hoverBackgroundColorData,
					},
				],
			};
			const options = {
				scales: {
					xAxes: [
						{
							ticks: {
								autoSkip: false,
							},
						},
					],
				},
			};
			graphComponent = (
				<Bar
					width={100}
					height={70}
					data={dataListHorBar}
					options={options}
					redraw
				/>
			);
			break;
		case "Line":
			graphComponent = <Line width={100} height={75} data={dataList} />;
			break;
		default:
			graphComponent = <div />;
			break;
	}
	return graphComponent;
}

function mapStateToProps(state) {
	return {
		companiesStats: state.companiesStats,
	};
}

export default connect(mapStateToProps)(GraphWrapper);
