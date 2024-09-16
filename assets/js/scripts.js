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
			"fa-solid",
			"fa-solid"
		],
		icons: [
			"fa-home",
			"fa-calendar",
			"fa-bookmark",
			"fa-chalkboard-user",
			"fa-music",
			"fa-list"
		],
		titles: [
			"Home",
			"Calendar",
			"Links",
			"Tutorials",
			"Music",
			{
				title: "Apps",
				components: [
						"Level 1",
						"Level 2",
						"Level 3"
					]
			}
		]
	}

	// Assign html elements to variables (left panel and main content)
	const panel = document.querySelector("#panel"),
		  appbox = document.querySelector("#appbox");

	// Set default classes
	panel.classList.add("panelDefault");
	appbox.classList.add("appboxDefault");

	// Loading items
	for (let i = 0; i < data.icons.length; i++) {

		// Structure variables
		const div = document.createElement("div"),				// div item
			  panelItemGroup = document.createElement("div"),	// group for icon and text
			  icon = document.createElement("i"),				// font awesome icon
			  text = document.createElement("span");			// item title

		// Add classes
		div.classList.add("panelItem");
		panelItemGroup.classList.add("panelItemGroup");
		icon.classList.add("icon", data.type[i], data.icons[i]);
		text.classList.add("panelItemTitle");

		// Appending
		div.appendChild(panelItemGroup);
		panelItemGroup.appendChild(icon);
		panelItemGroup.appendChild(text);

		// Value if it's an object
		if (typeof data.titles[i] == "object") {

			text.innerText = data.titles[i].title;
			const arrow = document.createElement("i");
			div.appendChild(arrow);
			arrow.classList.add("panelItemMenu","fa-solid", "fa-caret-right");

		} else {

			text.innerText = data.titles[i];

		}

		// Append element to the panel
		panel.appendChild(div);

	}
} /* End of function */

// Function load
window.onload = mainFunc;

/* Toggle for panel */

const panelBtnToggle = document.querySelector("#panelBtnToggle");
const panelToggle = () => {

	panel.classList.toggle("panelDefault");
	panel.classList.toggle("panelToggled");

	appbox.classList.toggle("appboxDefault");
	appbox.classList.toggle("appboxToggled");

}

panelBtnToggle.addEventListener("click", panelToggle);