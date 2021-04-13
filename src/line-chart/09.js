window.addEventListener("load", () => drawChart());

window.addEventListener("resize", (e) => {
	updateChart();
});
const data = [
	{ timestamp: 1609815600, value: 1128508.14 },
	{ timestamp: 1609902000, value: 1124341.12 },
	{ timestamp: 1609988400, value: 1167081.56 },
	{ timestamp: 1610074800, value: 1158839.64 },
	{ timestamp: 1610161200, value: 1007137.42 },
	{ timestamp: 1610247600, value: 830898.38 },
	{ timestamp: 1610334000, value: 1279405.64 },
	{ timestamp: 1610420400, value: 1100188.68 },
	{ timestamp: 1610506800, value: 1066523.99 },
	{ timestamp: 1610593200, value: 1047359.08 },
	{ timestamp: 1610679600, value: 1065722.17 },
	{ timestamp: 1610766000, value: 981655.22 },
	{ timestamp: 1610852400, value: 834900.57 },
	{ timestamp: 1610938800, value: 1130676.94 },
	{ timestamp: 1611025200, value: 1038442.69 },
	{ timestamp: 1611111600, value: 1015027.55 },
	{ timestamp: 1611198000, value: 1047405.12 },
	{ timestamp: 1611284400, value: 1015702.26 },
	{ timestamp: 1611370800, value: 881009.19 },
	{ timestamp: 1611457200, value: 609266.66 },
	{ timestamp: 1611543600, value: 1065421.54 },
	{ timestamp: 1611630000, value: 995707.18 },
	{ timestamp: 1611716400, value: 985693.25 },
	{ timestamp: 1611802800, value: 998731.46 },
	{ timestamp: 1611889200, value: 1002054.46 },
	{ timestamp: 1611975600, value: 885455.29 },
	{ timestamp: 1612062000, value: 729560.18 },
	{ timestamp: 1612148400, value: 1431610.36 },
	{ timestamp: 1612234800, value: 1155321.11 },
	{ timestamp: 1612321200, value: 1120145.61 },
	{ timestamp: 1612407600, value: 1143529.07 },
	{ timestamp: 1612494000, value: 1158836.66 },
	{ timestamp: 1612580400, value: 1014061.72 },
	{ timestamp: 1612666800, value: 796005.99 },
	{ timestamp: 1612753200, value: 1226407.73 },
	{ timestamp: 1612839600, value: 1017887.99 },
	{ timestamp: 1612926000, value: 1101392.82 },
	{ timestamp: 1613012400, value: 1037064.26 },
	{ timestamp: 1613098800, value: 1072720.1 },
	{ timestamp: 1613185200, value: 942621.94 },
	{ timestamp: 1613271600, value: 734631.77 },
	{ timestamp: 1613358000, value: 979115.39 },
	{ timestamp: 1613444400, value: 646489.61 },
	{ timestamp: 1613530800, value: 918171.36 },
	{ timestamp: 1613617200, value: 1030111.53 },
	{ timestamp: 1613703600, value: 999587.02 },
	{ timestamp: 1613790000, value: 841058.64 },
	{ timestamp: 1613876400, value: 562620.53 },
	{ timestamp: 1613962800, value: 1084115.07 },
	{ timestamp: 1614049200, value: 950970.09 },
	{ timestamp: 1614135600, value: 909283.19 },
	{ timestamp: 1614222000, value: 944510.63 },
	{ timestamp: 1614308400, value: 964733.67 },
	{ timestamp: 1614394800, value: 817357.66 },
	{ timestamp: 1614481200, value: 669374.51 },
	{ timestamp: 1614567600, value: 1364643.31 },
	{ timestamp: 1614654000, value: 1108573.94 },
	{ timestamp: 1614740400, value: 1049193.1 },
	{ timestamp: 1614826800, value: 1044641.97 },
	{ timestamp: 1614913200, value: 1087027.52 },
	{ timestamp: 1614999600, value: 876015.61 },
	// { timestamp: 1615086000, value: 698440.97 },
	// { timestamp: 1615172400, value: 1135709.69 },
	// { timestamp: 1615258800, value: 1000130 },
	// { timestamp: 1615345200, value: 1020619.19 },
	// { timestamp: 1615431600, value: 1003106.56 },
	// { timestamp: 1615518000, value: 961403.45 },
	// { timestamp: 1615604400, value: 780543.82 },
	// { timestamp: 1615690800, value: 647060.13 },
	// { timestamp: 1615777200, value: 1045698.35 },
	// { timestamp: 1615863600, value: 931525.11 },
	// { timestamp: 1615950000, value: 910648.47 },
	// { timestamp: 1616036400, value: 914395.13 },
	// { timestamp: 1616122800, value: 947549.73 },
	// { timestamp: 1616209200, value: 734534.4 },
	// { timestamp: 1616295600, value: 497671.79 },
	// { timestamp: 1616382000, value: 999020 },
	// { timestamp: 1616468400, value: 886405.88 },
	// { timestamp: 1616554800, value: 920273.98 },
	// { timestamp: 1616641200, value: 889714.14 },
	// { timestamp: 1616727600, value: 874530.75 },
	// { timestamp: 1616814000, value: 736122.85 },
	// { timestamp: 1616900400, value: 583136.65 },
	// { timestamp: 1616986800, value: 960286.28 },
	// { timestamp: 1617073200, value: 910421.99 },
	// { timestamp: 1617159600, value: 942012.96 },
	// { timestamp: 1617246000, value: 1219237.18 },
	// { timestamp: 1617332400, value: 768867.64 },
	// { timestamp: 1617418800, value: 830735.09 },
	// { timestamp: 1617505200, value: 663821.39 },
	// { timestamp: 1617591600, value: 1175532.41 },
	// { timestamp: 1617678000, value: 1033334.91 },
	// { timestamp: 1617764400, value: 1004713.67 },
	// { timestamp: 1617850800, value: 1038144.72 },
	// { timestamp: 1617937200, value: 970899.75 },
	// { timestamp: 1618023600, value: 855122.3 },
	// { timestamp: 1618110000, value: 675135.33 },
	// { timestamp: 1618196400, value: 1096814.83 },
].sort((a, b) => a.timestamp - b.timestamp);

function updateChart() {
	document.querySelector("svg").remove();
	drawChart();
}

function drawChart() {
	const margin = { top: 50, right: 60, bottom: 50, left: 70 };

	const minWidth = 300;
	const minHeight = 250;

	const width = window.innerWidth > 400 ? window.innerWidth - 100 : minWidth;
	const height =
		window.innerHeight > 450 ? window.innerHeight - 200 : minHeight;

	const datesArr = data.map((item) => new Date(item.timestamp * 1000));
	const valuesArr = data.map((item) => item.value);
	const maxValue = Math.max(...data.map((o) => o.value));

	const svgCanvas = createSvgCanvas();

	const myTimeScale = d3
		.scaleLinear()
		.domain([datesArr[0], datesArr[datesArr.length - 1]])
		.range([margin.left, width - margin.right]);

	const myValuesScale = d3
		.scaleLinear()
		.domain([maxValue, 0])
		.range([margin.top, height - margin.bottom]);

	const xAxis = createXAxis();
	const yAxis = createYAxis();
	appendAxis();
	const line = createLine();
	const dots = createDots();

	// cx: (d) => d[0], cy: (d) => d[1], r: 6, fill: 'red'

	function createSvgCanvas() {
		return d3
			.select("#container")
			.append("svg")
			.attr("width", width)
			.attr("height", height)
			.style("border", "1px solid");
	}

	function createXAxis() {
		const dateFormat = d3.timeFormat("%d/%m");
		const tickTextWidth = 60;
		return d3
			.axisBottom(myTimeScale)
			.ticks(width / tickTextWidth)
			.tickFormat(dateFormat)
			.tickSizeOuter(0);
	}

	function createYAxis() {
		const tickTextHeight = 40;

		return d3
			.axisLeft(myValuesScale)
			.ticks(height / tickTextHeight)
			.tickSize(margin.left + margin.right - width)
			.tickSizeOuter(0);
	}

	function appendAxis() {
		svgCanvas
			.append("g")
			.call(xAxis)
			.attr("transform", `translate(${0}, ${height - margin.bottom})`);

		svgCanvas
			.append("g")
			.call(yAxis)
			.attr("class", "y-axis")
			.attr("transform", `translate(${margin.left}, ${0})`);

		svgCanvas.selectAll(".y-axis .tick line").attr("opacity", 0.3);
	}

	function createDots() {
		const dataset = filterDataBasedOnWidth(data);

		return svgCanvas
			.append("g")
			.attr("class", "dots")
			.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("class", (d, i) => `dot-${i}`)
			.attr("cx", (d, i) => myTimeScale(datesArr[i]))
			.attr("cy", (d, i) => myValuesScale(d.value))
			.attr("r", 4)
			.attr("fill", "red")
			.attr("stroke", "red")
			.style("display", (d) => (d.timestamp ? "block" : "none"))
			.style("transition", "0.3s");

		// omitir data points caso falte espaço
		function filterDataBasedOnWidth(dataset) {
			const dotMinWidth = 20;
			let filterFactor = 1;

			dataset = data;
			while (width / dataset.length < dotMinWidth / filterFactor) {
				filterFactor++;
				dataset = dataset.map((_, i) => (i % filterFactor === 0 ? _ : {}));
			}
			console.log(filterFactor);
			return dataset;
		}
	}

	function createLine() {
		let lineGenerator = d3.line();
		lineGenerator.x((d, i) => myTimeScale(datesArr[i]));
		lineGenerator.y((d) => myValuesScale(d.value));
		lineGenerator.curve(d3.curveCardinal.tension(0.8));

		return svgCanvas
			.append("g")
			.attr("class", "line")
			.append("path")
			.attr("d", lineGenerator(data))
			.attr("fill", "none")
			.attr("stroke", "lightblue")
			.attr("stroke-width", 2);
	}

	dots.on("mouseover", (d, i) => {
		// console.log(d) === console.log(data[i]);
		d3.select(`.dot-${i}`).attr("r", "7").style("cursor", "pointer");
	});
	dots.on("mouseout", (d, i) => {
		d3.select(`.dot-${i}`).attr("r", "4").style("cursor", "arrow");
	});
}
