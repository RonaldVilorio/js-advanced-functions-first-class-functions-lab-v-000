// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
  // debugger
  return drivers.slice(0,2).map(function(driver){return driver})
}
const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length - 1, -2)
}
