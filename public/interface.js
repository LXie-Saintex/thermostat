const TYPE_RELOAD = 1;

function isReloadedPage() {
  return performance.navigation.type === TYPE_RELOAD;
}


$(document).ready(function() {
	if(isReloadedPage()) {
		$.get('/temperature', function(data) {
			if(data.temperature){
				thermostat.setTemperature(data.temperature);
				updateTemperature();
			};
			if(data.city){
				displayWeather(data.city);
			};
		})
	}
	else {
		displayWeather("London");
		
		$('#select-city').submit(function(event) {
			event.preventDefault();
			var city = $('#current-city').val();
			displayWeather(city);
		})
	}

	var thermostat = new Thermostat();
	updateTemperature();

	$('#temperature-up').on('click', function(){
		thermostat.up();
		updateTemperature();
	});

	$('#temperature-down').on('click', function(){
		thermostat.down();
		updateTemperature();
	});

	$('#temperature-reset').on('click', function(){
		thermostat.resetTemperature();
		updateTemperature();
	});

	$('#powersaving-on').click(function(){
		thermostat.switchPowerSavingModeOn();
		$('#power-saving-status').text('on')
		updateTemperature();
	})

	$('#powersaving-off').click(function(){
		thermostat.switchPowerSavingModeOff();
		$('#power-saving-status').text('off')
		updateTemperature();
	})

	function displayWeather(city) {
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
		var token = '&appid=ac83c371ddd24b51df4428d21e3bec9e';
		var units = '&units=metric';
		$.get(url + token + units, function(data){
			$('#current-temperature').text(data.main.temp);
		});
		$.post('/temperature', { city: `${city}` });
	}

	function updateTemperature(){
		$('#temperature').text(thermostat.temperature);
		$('#temperature').attr('class', thermostat.energyUsage());
		$.post('/temperature', {temperature: `${thermostat.temperature}`})
	}
})

