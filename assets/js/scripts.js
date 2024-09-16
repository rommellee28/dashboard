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
			"fa-solid",
			"fa-solid"
		],
		icons: [
			"fa-home",
			"fa-calendar",
			"fa-bookmark",
			"fa-chalkboard-user",
			"fa-music"
		],
		titles: [
			"Home",
			"Calendar",
			"Links",
			"Tutorials",
			"Music"
		]
	}

	const panel = document.querySelector("#panel");
	const appbox = document.querySelector("#appbox");
	panel.classList.add("panelDefault");
	appbox.classList.add("appboxDefault");

	// Loading items
	for (let i = 0; i < data.icons.length; i++) {
		const div = document.createElement("div");
		const icon = document.createElement("i");
		const text = document.createElement("p");

		div.classList.add("panelItem");
		icon.classList.add("icon", data.type[i], data.icons[i]);
		text.classList.add("panelItemTitle");
		text.innerText = data.titles[i];

		div.appendChild(icon);
		div.appendChild(text);

		panel.appendChild(div);
	}
}

// Function load
window.onload = mainFunc;

/* NEXT SECTION OF THE SCRIPT - SECOND SECTION - BUTTON TOGGLER FOR PANEL SHOW */

const panelBtnToggle = document.querySelector("#panelBtnToggle");
const panelToggle = () => {
	panel.classList.toggle("panelDefault");
	panel.classList.toggle("panelToggled");

	appbox.classList.toggle("appboxDefault");
	appbox.classList.toggle("appboxToggled");
}

panelBtnToggle.addEventListener("click", panelToggle);