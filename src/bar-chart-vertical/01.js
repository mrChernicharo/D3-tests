const data = [
	// value sorted <-- default sort
	{ description: "RECARGA", value: 3528000, amount: "159122" },
	{ description: "CE", value: 1590284, amount: "227182" },
	{ description: "DADOS", value: 641443.81, amount: "164571" },
	{ description: "MIGRAÇÃO PRE_CTRL", value: 360533.62, amount: "15568" },
	{ description: "PROMOÇÃO", value: 53640.06, amount: "28840" },
	{ description: "VOZ", value: 22436.76, amount: "3004" },
	{ description: "SVA", value: 20460.72, amount: "5128" },
	{ description: null, value: 15545.93, amount: "3907" },
	{ description: "CANAIS A LA CARTE", value: 5650.1, amount: "117" },
	{ description: "PROMOÇÃO_CTRL", value: 5418.8, amount: "5522" },
	{ description: "MIX", value: 4994.66, amount: "1884" },
	{ description: "SMS", value: 3800, amount: "897" },
	{ description: "CADASTRO/TROCA CARTÃO", value: 1664.45, amount: "63604" },
	{ description: "PCT OBRIGATORIO", value: 314.5, amount: "5" },
	{ description: "SERVICOS", value: 52.5, amount: "75" },
	{ description: "PPV", value: 12.9, amount: "1" },
	{ description: "OI TV", value: 0, amount: "555" },
	{ description: "CANCELAMENTO", value: 0, amount: "17130" },
	{ description: "ATIVAÇÃO", value: 0, amount: "217310" },
	{ description: "INVÁLIDO", value: 0, amount: "24" },
	{ description: "CONVERSÃO DE BENEFICIO", value: 0, amount: "23" },
];

const height = 560;
const width = 640;
const margin = { top: 50, right: 50, bottom: 50, left: 50 };

function createSvgCanvas() {
	return d3
		.select("#container")
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.style("border", "1px solid");
}
// console.log(d3.max(data).value);
console.log(data);

const scaleX = d3.scaleLinear([0, d3.max(data).value], [350, 50]);

const scaleY = d3
	.scaleBand()
	.domain([0, d3.max(data)])
	.range([0, data.length * 30]);

const svgCanvas = createSvgCanvas();

// svgCanvas
// 	.append("g")
// 	.call(scaleX)
// 	.attr("class", "x-axis")
// 	.attr("transform", `translate(${0}, ${height - margin.bottom})`);

// svgCanvas
// 	.append("g")
// 	.call(scaleY)
// 	.attr("class", "y-axis")
// 	.attr("transform", `translate(${margin.left}, ${0})`);

svgCanvas
	.selectAll("line")
	.data([margin.left, width - margin.right])
	.enter()
	.append("line")
	.attr("x1", (d) => d)
	.attr("x2", (d) => d)
	.attr("y1", 50)
	.attr("y2", height)
	.attr("stroke", "black");
