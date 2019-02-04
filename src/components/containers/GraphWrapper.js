import React, { Component } from "react";
import { connect } from "react-redux";
import { Doughnut, HorizontalBar, Bar, Line } from "react-chartjs-2";
import "./DoughnutWrapped.css";

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
		// TODO : faire l'appel à l'api ici et faire le map -> labels/data là plutôt que dans maplayout
		return (
			<GraphShowing
				graphType={this.props.graphType}
				data={this.props.data}
				labels={this.props.labels}
				graphLabel={this.props.graphLabel}
			/>
		);
		// return (
		// 	<div>
		// 		<Wrapper isToggleOn={this.state.isToggleOn} texte={this.props.titre}>
		// 			<div className="doughnut-lenght">
		// 				<Doughnut data={dataList} />
		// 			</div>
		// 		</Wrapper>
		// 	</div>
		// );
	}
}

function GraphShowing(props) {
	console.log(props.graphType);
	var graphComponent;
	const dataList = {
		labels: props.labels,
		datasets: [
			{
				label: props.graphLabel,
				data: props.data,
				backgroundColor: "rgba(2, 171, 111,0.2)",
				hoverBackgroundColor: "rgba(2, 171, 111,1)",
			},
		],
	};
	switch (props.graphType) {
		case "Doughnut":
			const dataListDoughnut = {
				labels: props.labels,
				datasets: [
					{
						label: props.graphLabel,
						data: props.data,
						backgroundColor: backgroundColorData,
						hoverBackgroundColor: hoverBackgroundColorData,
					},
				],
			};
			// dataList.datasets["backgroundColor"] = backgroundColorData;
			// dataList.datasets["hoverBackgroundColor"] = hoverBackgroundColorData;
			console.log(dataList);
			graphComponent = <Doughnut data={dataListDoughnut} />;
			break;
		case "Bar":
			console.log(dataList);

			graphComponent = (
				<Bar
					data={dataList}
					width={100}
					height={50}
					options={{
						maintainAspectRatio: false,
					}}
				/>
			);
			break;
		case "HorizontalBar":
			graphComponent = <HorizontalBar data={dataList} />;
			break;
		case "Line":
			graphComponent = <Line data={dataList} />;
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
