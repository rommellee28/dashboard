const mainFunc = () => {
	// Console msg
	let estilos = `
		color: #235298;
		font-size: 20px;
		font-family: arial;
	`;
	console.log("%c El script funciona", estilos);

	// Object with Icons and Titles
	// const data = {
	// 	type: [
	// 		"fa-solid",
	// 		"fa-regular",
	// 		"fa-regular",
	// 		"fa-solid",
	// 		"fa-solid",
	// 		"fa-solid"
	// 	],
	// 	icons: [
	// 		"fa-home",
	// 		"fa-calendar",
	// 		"fa-bookmark",
	// 		"fa-chalkboard-user",
	// 		"fa-music",
	// 		"fa-list"
	// 	],
	// 	titles: [
	// 		"Home",
	// 		"Calendar",
	// 		"Links",
	// 		"Tutorials",
	// 		"Music",
	// 		{
	// 			title: "Apps",
	// 			components: [
	// 				"HTML",
	// 				"CSS",
	// 				"Javascript"
	// 			]
	// 		}
	// 	]
	// }

	const data = {
		type: ["fa-regular"],
		icons: ["fa-circle"],
		titles: ["Home"]
	}

	// Assign html elements to variables (left panel and main content)
	const panel = document.querySelector("#panel"),
		  viewboard = document.querySelector("#viewboard");

	// Set default classes
	panel.classList.add("panel-Default");
	viewboard.classList.add("viewboard-Default");

	// Loading items
	for (let i = 0; i < data.titles.length; i++) {

		// DOM Nodes
		const item = document.createElement("div"),				// div item
			  wrapper = document.createElement("div"),			// wrapper for icon and title
			  icon = document.createElement("i"),				// font awesome icon
			  title = document.createElement("span");			// item title

		// Append
		item.appendChild(wrapper);
		wrapper.appendChild(icon);
		wrapper.appendChild(title)
		panel.appendChild(item);

		// Add classes
		item.classList.add("panel_item");
		wrapper.classList.add("item_wrapper");
		icon.classList.add("item_icon", data.type[i], data.icons[i]);
		title.classList.add("item_title");
		

		// Value if it's an object
		if (typeof data.titles[i] == "object") {

			title.innerText = data.titles[i].title;

			// DOM nodes
			const menu = document.createElement("div");			// dropdown menu

			// Append
			item.appendChild(menu);

			// Add classes
			item.classList.add("menu_dropdown");
			wrapper.classList.add("item_collapsed");
			menu.classList.add("item_menu", "no-display");
			

			// Create menu elements
			for (let j = 0; j < data.titles[i].components.length; j++) {
				
				// Declaration
				const element = document.createElement("div");

				// Append
				menu.appendChild(element);

				// Add classes
				element.classList.add("menu_option");

				// Add text
				element.innerText = data.titles[i].components[j];

			}

			// Add event listeners
			wrapper.addEventListener(
				"click", 
				function (){
					wrapper.classList.toggle("item_collapsed");
					wrapper.classList.toggle("item_expanded");
					menu.classList.toggle("no-display");
				});

		} else {

			title.innerText = data.titles[i];

		}

	} // End of for
} // End of function

// Function load
window.onload = mainFunc;

/* Toggle for panel */

const panelBtnToggle = document.querySelector("#panelBtnToggle");
const panelToggle = () => {

	panel.classList.toggle("panel-Default");
	panel.classList.toggle("panel-Toggled");

	viewboard.classList.toggle("viewboard-Default");
	viewboard.classList.toggle("viewboard-Toggled");

}

panelBtnToggle.addEventListener("click", panelToggle);
