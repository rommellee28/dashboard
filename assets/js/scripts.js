const mainFunc = () => {
	// Console msg
	let estilos = `
		color: #235298;
		font-size: 20px;
		font-family: arial;
	`;
	console.log("%c El script funciona", estilos);

	// Object with Icons and Titles
	const data = {
		type: [
			"fa-solid",
			"fa-regular",
			"fa-regular",
			"fa"
		],
		icons: [
			"fa-home",
			"fa-calendar",
			"fa-bookmark",
			"fa-chalkboard-user"
		],
		titles: [
			"Home",
			"Calendar",
			"Links",
			"Tutorials"
		]
	}

	const panel = document.querySelector("#panel");
	const appbox = document.querySelector("#appbox");
	panel.classList.add("panelShow");
	appbox.classList.add("appboxFull");

	// Loading items
	for (let i = 0; i < data.icons.length; i++) {
		const div = document.createElement("div");
		const icon = document.createElement("i");
		const text = document.createElement("p");

		div.classList.add("panelItem");
		icon.classList.add("icon", data.type[i], data.icons[i]);
		text.classList.add("panelTitle");
		text.innerText = data.titles[i];

		div.appendChild(icon);
		div.appendChild(text);

		panel.appendChild(div);
	}
}

// Function load
window.onload = mainFunc;

/* NEXT SECTION OF THE SCRIPT - SECOND SECTION - BUTTON TOGGLER FOR PANEL SHOW */

const panelBtnToggler = document.querySelector("#panelBtnToggler");
const togglePanelView = () => {
	panel.classList.toggle("panelShow");
	panel.classList.toggle("panelHide");

	appbox.classList.toggle("appboxFull");
	appbox.classList.toggle("appboxShort");
}

panelBtnToggler.addEventListener("click", togglePanelView);