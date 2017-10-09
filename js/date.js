// Set the current time
var getTime = function() {
	var date = new Date();
	var hours = date.getHours();
	var period = (hours > 12) ? "PM" : "AM";
	hours = (hours > 12) ? hours - 12 : hours; // <-- Remove for 24hr clock
	var minute = ('0' + date.getMinutes()).slice(-2);
	var seconds = ('0' + date.getSeconds()).slice(-2);

	$('.time').html(hours + ":" + minute + ":" + seconds + " " + period);
};

getTime(); // <-- Call once to show the time immediately

// Update the time every 1000ms thereafter (every 1 second)
setInterval(getTime, 1000);
