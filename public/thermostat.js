'use strict';

class Thermostat{
  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10; 
    this.temperature = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  }
  getCurrentTemperature() {
    return this.temperature;
  }

  energyUsage() {
    if(this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
      return 'low-usage'
    } else if (this.temperature > this.MAX_LIMIT_PSM_ON) {
      return'high-usage'
    } else {
      return 'medium-usage'
    }
  }

  up(){
    if(this.isMaximumTemperature()) {
      return;
    }
    this.temperature++
  }

  down(){
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature--;
  }

  setTemperature(temp) {
    this.temperature = temp;
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false ) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
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

