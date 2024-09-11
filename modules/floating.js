// div and table assignation
const fldiv = document.createElement("div");
const fltable = document.createElement("table");

// Div Styles
const fldivStyles = `
	position: fixed;
	right: 1rem;
	bottom: 1rem;
	height: 150px;
	width: 250px;
	background: #5f3f8f31;
	box-sizing: border-box;
	padding: 1rem;
	display: flex;
	flex-direction: column;
`;

// Table Styles
const fltableStyles = `
	border: solid 1pt #ccc;
	border-collapse: collapse;
	text-align: left;

`;

const flcellStyles = `
	border: solid 1pt #ccc;
`

// Adding Styles to div and table
fldiv.setAttribute("style", fldivStyles);
fltable.setAttribute("style", fltableStyles);

// Create th texts
const flthTexts = [
	"Inner Width",
	"Client Width",
	"Inner Height",
	"Client Height",
	"Cursor X",
	"Cursor Y"
]

for (let i = 0; i < flthTexts.length; i++) {
	const row = document.createElement("tr");
	const header = document.createElement("th");
	const cell = document.createElement("td");

	// Set header text
	header.innerText = flthTexts[i];

	row.appendChild(header);
	row.appendChild(cell);

	// Append rows to the table
	fltable.appendChild(row);
}

// Append table to the floating canvas
fldiv.appendChild(fltable);

// Append floating canvas to the body
document.body.appendChild(fldiv);

const fldata = document.querySelectorAll("td");

// Updating in real time
const fldataUpdate = () => {

	const fltdTexts = [
	window.innerWidth,
	document.body.clientWidth,
	window.innerHeight,
	document.body.clientHeight
]

	for (let i = 0; i < 4; i++) {
		fldata[i].innerText = fltdTexts[i];
	}
}

const flcursorCoords = e => {
	fldata[4].innerText = e.clientX;
	fldata[5].innerText = e.clientY;
}

// Update the content in real-time
setInterval(fldataUpdate, 100);

// Add event listener for cursor movement
document.addEventListener("mousemove", flcursorCoords);

// Initial data update
fldataUpdate();
