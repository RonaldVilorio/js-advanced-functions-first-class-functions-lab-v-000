// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  // debugger
  return drivers.slice(0,2).map(function(driver){return driver})
}
const returnLastTwoDrivers = function(drivers){
  // debugger
  return drivers.slice(-2).map(function(driver){return driver})
}
const selectingDrivers = [returnFirstTwoDrivers(drivers),returnLastTwoDrivers(drivers)]
