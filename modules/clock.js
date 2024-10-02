const clock = () => {
	if (document.querySelector(".clock")) {
		const clock_date = document.querySelector(".clock_date");
		const clock_time = document.querySelector(".clock_time");
		const date = new Date();
		
		// Date
		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDate();

		// Time
		let meridian;
		let hours;
		const minutes = date.getMinutes().toString().padStart(2, '0');
		const seconds = date.getSeconds().toString().padStart(2, '0');

		// Convert to 12 hours clock
		if (date.getHours().toString() <= 12) {
			hours = date.getHours().toString().padStart(2, '0');
			meridian = "am";
		} else {
			hours = (date.getHours() - 12).toString().padStart(2, '0');
			meridian = "pm";
		}
		
		// Days of the week
		const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		const dayofweek = date.getDay();

		// Results
		const today = `${week[dayofweek]}, ${months[month]} ${day}, ${year}`;
		const time = `${hours}:${minutes}:${seconds} ${meridian}`;

		clock_date.innerText = today;
		clock_time.innerText = time;
	}	
	
}

setInterval(clock, 1000);