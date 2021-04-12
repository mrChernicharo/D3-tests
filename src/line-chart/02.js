const data = [
	{ timestamp: 1617246000, value: 1219237.18 }, // 01/04
	{ timestamp: 1617591600, value: 1175532.41 }, // 05/04
	{ timestamp: 1617678000, value: 1033334.91 }, // 06/04
	{ timestamp: 1617764400, value: 1004713.67 },
	{ timestamp: 1616986800, value: 960286.28 },
	{ timestamp: 1617159600, value: 942012.96 }, // 31/03
	{ timestamp: 1617073200, value: 910421.99 }, // 30/03
	{ timestamp: 1616641200, value: 889714.14 },
	{ timestamp: 1616900400, value: 583136.65 }, // 28/03
	{ timestamp: 1616727600, value: 874530.75 }, // 26/03
	{ timestamp: 1617418800, value: 830735.09 }, // 03/04
	{ timestamp: 1617332400, value: 768867.64 },
	{ timestamp: 1616814000, value: 736122.85 }, // 27/03
	{ timestamp: 1617505200, value: 663821.39 }, // 04/04
].sort((a, b) => a.timestamp - b.timestamp);

const datesArr = data.map((item) => new Date(item.timestamp * 1000));
console.log(datesArr);

const width = 600;
const height = 400;

console.log();

let svgCanvas = d3
	.select("#container")
	.append("svg")
	.attr("width", width)
	.attr("height", height)
	.style("border", "1px solid");

let timeScale = d3
	.scaleTime()
	.domain([datesArr[0], datesArr[datesArr.length - 1]])
	.range([30, width - 60]);

// cria UM TICK por dia independente da quantidade de dataPoints
let dates = timeScale.ticks(d3.timeDay.every(2));

let dateFormat = d3.timeFormat("%d/%m");

console.log(dates);

svgCanvas
	.selectAll("text")
	.data(dates)
	.enter()
	.append("text")
	.attr("y", height - 50)
	.attr("x", (d) => timeScale(d))
	.style("font-size", 12)
	.text((d) => dateFormat(d));
