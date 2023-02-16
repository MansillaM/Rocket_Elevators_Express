const data = require('./data');

const calcResidentialElev = (numFloors, numApts) => {
  const elevatorsRequired = Math.ceil(numApts / numFloors / 6)*Math.ceil(numFloors / 20);
  return elevatorsRequired;
}
const calcCommercialElev = (numFloors, maxOccupancy) => {
  const elevatorsRequired = Math.ceil((maxOccupancy * numFloors) / 200)*Math.ceil(numFloors / 10);
  const freighElevatorsRequired = Math.ceil(numFloors / 10);
  return freighElevatorsRequired + elevatorsRequired;
}

const calcInstallFee = (numElvs, tier) => {
  const unitPrice = data.unitPrices[tier];
  const installPercentFees = data.installPercentFees[tier];
  const totalPriceElev = numElvs * unitPrice;
  const installFeeCost = (installPercentFees / 100) * totalPriceElev;
  const price = totalPriceElev + installFeeCost
  return price;
}

module.exports = {
    calcResidentialElev,
    calcCommercialElev,
    calcInstallFee
};