window.addEventListener("load", () => drawChart());

window.addEventListener("resize", (e) => {
	updateChart();
});
const data = [
	{ timestamp: 1617246000, value: 1219237.18 }, // 01/04
	{ timestamp: 1617591600, value: 1175532.41 }, // 05/04
	{ timestamp: 1617678000, value: 1033334.91 }, // 06/04
	{ timestamp: 1617764400, value: 1004713.67 }, // 07/04
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

function drawChart() {
	const width = window.innerWidth - 100;
	const height = window.innerHeight - 200;
	const datesArr = data.map((item) => new Date(item.timestamp * 1000));

	const svgCanvas = createSvgCanvas();
	const tickTextWidth = 60;
	const tickTextHeight = 30;

	const myTimeScale = d3
		.scaleLinear()
		.domain([datesArr[0], datesArr[datesArr.length - 1]])
		.range([30, width - 60]);

	let dateFormat = d3.timeFormat("%d/%m");

	const xAxis = createXAxis();
	appendXAxis();

	function createSvgCanvas() {
		return d3
			.select("#container")
			.append("svg")
			.attr("width", width)
			.attr("height", height)
			.style("border", "1px solid");
	}
	function createXAxis() {
		return d3
			.axisBottom(myTimeScale)
			.ticks(width / tickTextWidth)
			.tickFormat(dateFormat);
	}
	function appendXAxis() {
		svgCanvas
			.append("g")
			.call(xAxis)
			.attr("transform", `translate(10, ${height - 50})`);
	}
}

function updateChart() {
	document.querySelector("svg").remove();
	drawChart();
}
