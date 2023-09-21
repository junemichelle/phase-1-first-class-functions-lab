const returnFirstTwoDrivers = function (drivers=['Antonia', 'Nuru', 'Amari', 'Mo']){
  return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (drivers=['Antonia', 'Nuru', 'Amari', 'Mo']){
  return drivers.slice(2,)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier= function (fareMultiplier){
  return function(x){
  return x * fareMultiplier;}
}
  //console.log(createFareMultiplier)

 function fareDoubler(x){
  return x*2
 }

 function fareTripler(x){
  return x*3
 }


    const selectDifferentDrivers = function(drivers, whichDrivers) {
      return whichDrivers(drivers);}

 
 



