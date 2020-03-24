'use strict';

class Thermostat{
  constructor() {
    this.MINIMUM_TEMPERATURE = 10; 
    this.temperature = 20;
    this.powerSavingMode = true;
  }
  getCurrentTemperature() {
    return this.temperature;
  }

  up(){
    this.temperature++
  }

  down(){
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature--;
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false; 
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }
}

