window.addEventListener("load", () => drawChart());

window.addEventListener("resize", (e) => {
	updateChart();
});
const data = [
	{ timestamp: 1617246000, value: 1219237.18 }, // 01/04
	{ timestamp: 1617591600, value: 1175532.41 }, // 05/04
	// { timestamp: 1617678000, value: 1033334.91 }, // 06/04
	// { timestamp: 1617764400, value: 1004713.67 }, // 07/04
	{ timestamp: 1616986800, value: 960286.28 }, // 29/03
	{ timestamp: 1617159600, value: 942012.96 }, // 31/03
	{ timestamp: 1617073200, value: 910421.99 }, // 30/03
	{ timestamp: 1616641200, value: 889714.14 }, // 25/04
	{ timestamp: 1616900400, value: 583136.65 }, // 28/03
	{ timestamp: 1616727600, value: 874530.75 }, // 26/03
	{ timestamp: 1617418800, value: 830735.09 }, // 03/04
	{ timestamp: 1617332400, value: 768867.64 }, // 02/04
	{ timestamp: 1616814000, value: 736122.85 }, // 27/03
	{ timestamp: 1617505200, value: 663821.39 }, // 04/04
].sort((a, b) => a.timestamp - b.timestamp);

function updateChart() {
	document.querySelector("svg").remove();
	drawChart();
}

function drawChart() {
	const width = window.innerWidth - 100;
	const height = window.innerHeight - 200;
	const datesArr = data.map((item) => new Date(item.timestamp * 1000));
	const valuesArr = data.map((item) => item.value);
	const maxValue = Math.max(...data.map((o) => o.value));
	console.log(maxValue);

	const svgCanvas = createSvgCanvas();
	const tickTextWidth = 60;
	const tickTextHeight = 40;

	const myTimeScale = d3
		.scaleLinear()
		.domain([datesArr[0], datesArr[datesArr.length - 1]])
		.range([70, width - 60]);

	const myValuesScale = d3
		.scaleLinear()
		.domain([maxValue, 0])
		.range([30, height - 60]);

	const xAxis = createXAxis();
	const yAxis = createYAxis();
	appendAxis();

	function createSvgCanvas() {
		return d3
			.select("#container")
			.append("svg")
			.attr("width", width)
			.attr("height", height)
			.style("border", "1px solid");
	}
	function createXAxis() {
		let dateFormat = d3.timeFormat("%d/%m");

		return d3
			.axisBottom(myTimeScale)
			.ticks(width / tickTextWidth)
			.tickFormat(dateFormat)
			.tickSizeOuter(0);
	}
	function createYAxis() {
		return d3
			.axisLeft(myValuesScale)
			.ticks(height / tickTextHeight)
			.tickSizeOuter(0);
	}

	function appendAxis() {
		svgCanvas
			.append("g")
			.call(xAxis)
			.attr("transform", `translate(${0}, ${height - 50})`);

		svgCanvas
			.append("g")
			.call(yAxis)
			.attr("transform", `translate(${70}, ${10})`);
	}
}
