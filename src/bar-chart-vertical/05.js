// value sorted <-- default sort
const dataset = [
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
].map((item) =>
	item.description ? item : { ...item, description: "NÃO IDENTIFICADO" }
);

const height = 1000;
const width = 640;
const margin = { top: 50, right: 10, bottom: 50, left: 150 };

function createSvgCanvas() {
	return d3
		.select("#container")
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.style("border", "1px solid");
}
console.log(dataset);
console.log(dataset[0].value);

// valores negativos matam a escala
const xScale = d3.scaleLog().domain([1, 40000000000]).range([0, 640]);

const svgCanvas = createSvgCanvas();
const barHeight = 18;
const barBoundingHeight = 30;

const yLines = svgCanvas
	.selectAll("line")
	.attr("class", "y-line")
	.data([margin.left, width - margin.right])
	.enter()
	.append("line")
	.attr("x1", (d) => d)
	.attr("x2", (d) => d)
	.attr("y1", 50)
	.attr("y2", height)
	.attr("stroke", "black");

const bars = svgCanvas
	.append("g")
	.attr("class", "bars")
	.selectAll("rect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("class", (d, i) => `bar-${i}`)
	.attr("x", margin.left)
	.attr("y", (d, i) => i * barBoundingHeight + margin.top)
	.attr("height", barHeight)
	.attr("width", (d) => xScale(d.value + 1))
	.attr("fill", "blue");

const descriptions = svgCanvas
	.append("g")
	.attr("class", "descriptions")
	.selectAll("description")
	.attr("class", "label description")
	.data(dataset)
	.enter()
	.append("text")
	.attr("x", 140)
	.attr("y", (d, i) => i * barBoundingHeight + margin.top + 14)
	.text((d) => d.description)
	.attr("text-anchor", "end")
	.attr("fill", "#707070")
	.style("pointer-events", "none")
	.style("font-family", "Oswald")
	.style("font-weight", "400")
	.style("font-size", 12)
	.style("pointer-events", "none");

const values = svgCanvas
	.append("g")
	.attr("class", "values")
	.selectAll("value")
	.attr("class", "label value")
	.data(dataset)
	.enter()
	.append("text")
	.attr("x", (d) => xScale(d.value + 1) + 170)
	.attr("y", (d, i) => i * barBoundingHeight + margin.top + 14)
	.text((d) => Math.round(d.value)) // use currencyPipe
	.attr("fill", "#707070")
	.style("pointer-events", "none")
	.style("font-family", "Oswald")
	.style("font-size", 12)
	.style("font-weight", "400")
	.attr("fill", "blue");

const tooltip = d3
	.select("#container")
	.append("div")
	.attr("class", "d3-tooltip")
	.style("position", "absolute")
	.style("opacity", 0)
	.style("background-color", "rgba(73,73,74,.9)")
	.style("color", "#fff")
	.style("text-align", "center")
	.style("font-size", 12 + "px")
	.style("font-family", "Oswald")
	.style("padding", 4 + "px")
	.style("border", "0px")
	.style("border-radius", "4px")
	.style("pointer-events", "none");

const hideTooltip = () =>
	tooltip.transition().duration(500).style("opacity", 0);

const showTooltip = (d) => {
	tooltip
		.transition()
		.duration(200)
		.style("opacity", 0.9)
		// .style('left', d3.event.offsetX - 40 + 'px')
		.style("left", () =>
			d3.event.offsetX < width / 2 // mouse antes do meio do card ?
				? `${d3.event.offsetX + 40}px`
				: `${d3.event.offsetX - 140}px`
		)
		.style("top", () => `${d3.event.offsetY - 40}px`);
	// this.getPercentualAmount(d);
	tooltip.html(
		`<div style="display:flex; flex-direction:column; align-items:start; justify-content:center">
				${
					d3.event.offsetX < width / 2
						? `<div class="triangle" style="width: 0px;height: 0px;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-right: 12px solid rgba(73,73,73,0.9);border-left: 0px solid transparent;left: -12px;position: absolute;"></div>`
						: `<div class="triangle" style="width: 0px;height: 0px;border-top: 10px solid transparent;border-bottom: 10px solid transparent;border-left: 12px solid rgba(73,73,73,0.9);border-right: 0px solid transparent;right: -12px;position: absolute;"></div>`
				}
				<div style="display:flex; flex-direction: row; align-items: center; padding: 2px;">

					<div class="little-circle"
					style="width:10px; height:10px; margin-right:4px; border-radius:50%; 
					background: blue;">
					</div>

					${d.description}
				</div>

				<div style="padding: 2px;"> quantidade: ${d.amount} </div>

				<div style="padding: 2px;">
					valor:
					R$ ${d.value}
				</div>
			</div>`
	);
};

bars
	.on("mousemove", (d, i) => {
		showTooltip(d);
		d3.select(`.bar-${i}`).attr("opacity", 0.5);
	})
	.on("mouseout", (d, i) => {
		hideTooltip();
		d3.select(`.bar-${i}`).attr("opacity", 1);
	});
