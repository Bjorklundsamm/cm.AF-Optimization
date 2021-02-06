const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const taxCodes = require('./TaxCodes');

const writer = csvWriter();

const addressGenerator = () => {
  const address = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    county: faker.address.county(),
  };
  return JSON.stringify(address);
};

const dataGen = () => {
  const mainTableGen = () => {
    let groupId = 60000;
    let homeId = 10000;
    let i = 0;
    writer.pipe(fs.createWriteStream('mainTable.csv'));
    for (i; i < 10000000; i += 1) {
      writer.write({
        groupId,
        homeId,
        cost: Math.round(faker.finance.amount(95250, 10500000)),
        address: addressGenerator(),
      });
      homeId += 1;
      if (homeId > 99999) {
        console.log('100,000 instances seeded');
        groupId += 1;
        homeId = 10000;
      }
    }
  };
  const taxCodeTable = () => {
    let i = 0;
    writer.pipe(fs.createWriteStream('taxCodes.csv'));
    for (i; i < taxCodes.length; i += 1) {
      writer.write({
        taxId: taxCodes[i][0],
        county: taxCodes[i][1],
        rate: `${faker.finance.amount(3, 9)}%`,
      });
    }
  };
  mainTableGen();
  taxCodeTable();
};

dataGen();
