const data = require('./data');

//Calculate Elevator required from FLOORS and APTS
const calcResidentialElev = (numFloors, numApts) => {
  const elevatorsRequired = Math.ceil(numApts / numFloors / 6)*Math.ceil(numFloors / 20);
  return elevatorsRequired;
}

//Calculate installation fees from ELEV REQ and TIER chosen
const calcInstallFee = (numElvs, tier) => {
  const unitPrice = data.unitPrices[tier];
  const installPercentFees = data.installPercentFees[tier];
  const totalPriceElev = numElvs * unitPrice;
  const installFeeCost = (installPercentFees / 100) * totalPriceElev;
  const price = totalPriceElev + installFeeCost
  return price;
}

//export variables
module.exports = {
    calcResidentialElev,
    calcCommercialElev,
    calcInstallFee
};