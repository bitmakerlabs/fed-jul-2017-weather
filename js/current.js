// The API url and the city we want to check...
var url = "http://api.openweathermap.org/data/2.5/weather?callback=?";

var getTemp = function() {

	var city = $('#loc').val();

	var params = {
		'q':city,
		'units':'metric',
		'APPID':'6dec5fb891e6e243c9d8c20351998e67'
	}

	// Go call the URL and pass 2 parameters (q=city, units=metric/imperial)
	$.getJSON(url, params, function(result) {
		// "Callback" function runs once the data is returned


		// Data returns as a JSON object (we called it "data")
		console.log(result);
		// console.log("The temp is " + result.main.temp);

		$('.curr span').html(result.main.temp)
		$('.high span').html(result.main.temp_max)
		$('.low span').html(result.main.temp_min)

		if (result.main.temp > 0) {
			var red = Math.round(result.main.temp * 10)
			$('body').css('background-color', 'rgb('+red+', 0, 0)')
		}
		else {
			var blue = Math.round(result.main.temp * -10)
			$('body').css('background-color', 'rgb(0, 0, '+ (blue) +')')
		}

	});


}

$('#go').click(getTemp)
