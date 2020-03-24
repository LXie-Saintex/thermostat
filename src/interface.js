

$(document).ready(function() {
	$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ac83c371ddd24b51df4428d21e3bec9e&units=metric', 
	  function(data){ $('#current-temperature').text(data.main.temp)});
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

	function updateTemperature(){
		$('#temperature').text(thermostat.temperature);
		$('#temperature').attr('class', thermostat.energyUsage());
	}
})

