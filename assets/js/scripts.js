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

	const panel = document.querySelector("#panel");
	const appbox = document.querySelector("#appbox");
	panel.classList.add("panelDefault");
	appbox.classList.add("appboxDefault");

	// Loading items
	for (let i = 0; i < data.icons.length; i++) {
		const div = document.createElement("div"),
			  group = document.createElement("div"),
			  icon = document.createElement("i"),
			  text = document.createElement("span");

		div.classList.add("panelItem");
		group.classList.add("group");
		icon.classList.add("icon", data.type[i], data.icons[i]);
		text.classList.add("panelItemTitle");

		div.appendChild(group);
		group.appendChild(icon);
		group.appendChild(text);

		// Value if that element of the iteration is a simple string or an object
		if (typeof data.titles[i] == "object") {

			text.innerText = data.titles[i].title;
			const arrow = document.createElement("i");
			div.appendChild(arrow);
			arrow.classList.add("panelItemMenu","fa-solid", "fa-caret-right");

		} else {

			text.innerText = data.titles[i];

		}

		panel.appendChild(div);
	}
}

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