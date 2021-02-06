const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const taxCodes = require('./Seed-Data/TaxCodes');
const mortgageTypes = require('./Seed-Data/mortgageTypes');

const listingWriter = csvWriter();
const homeDataWriter = csvWriter();
const mortgageTypeWriter = csvWriter();
const taxCodeWriter = csvWriter();
const sellerWriter = csvWriter();

const addressGenerator = () => {
  const address = {
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
  };
  return JSON.stringify(address);
};

const dataGen = async () => {
  try {
    const listings = () => {
      let groupId = 60000;
      let homeId = 10000;
      let i = 0;
      listingWriter.pipe(fs.createWriteStream('listings.csv'));
      homeDataWriter.pipe(fs.createWriteStream('homeData.csv'));
      for (i; i < 10000000; i += 1) {
        const address = addressGenerator();
        const cost = Math.round(faker.finance.amount(95250, 10500000));
        const createdAt = faker.date.between('2019-01-01', '2021-01-05');
        const sellerId = `${Math.round(faker.finance.amount(100, 999))}_${Math.round(faker.finance.amount(100, 999))}`;
        listingWriter.write({
          groupId,
          homeId,
          cost,
          address,
          createdAt,
        });
        homeDataWriter.write({
          homeId: `${groupId}_${homeId}`,
          cost,
          address,
          taxId: taxCodes[Math.floor(Math.random() * taxCodes.length)][0],
          mortgageId: mortgageTypes[Math.floor(Math.random() * mortgageTypes.length)][0],
          sellerId,
          createdAt,
        });
        homeId += 1;
        if (homeId > 99999) {
          console.log('100,000 instances seeded');
          groupId += 1;
          homeId = 10000;
        }
      }
    };
    const mortgageCodeTable = () => {
      let i = 0;
      mortgageTypeWriter.pipe(fs.createWriteStream('mortgageTypes.csv'));
      for (i; i < mortgageTypes.length; i += 1) {
        mortgageTypeWriter.write({
          mortgageId: mortgageTypes[i][0],
          terms: mortgageTypes[i][1],
          rate: mortgageTypes[i][2],
        });
      }
    };
    const taxCodeTable = () => {
      let i = 0;
      taxCodeWriter.pipe(fs.createWriteStream('taxCodes.csv'));
      for (i; i < taxCodes.length; i += 1) {
        taxCodeWriter.write({
          taxId: taxCodes[i][0],
          county: taxCodes[i][1],
          rate: `${faker.finance.amount(3, 9)}%`,
        });
      }
    };
    const sellerTable = () => {
      let groupId = 100;
      let sellerId = 100;
      sellerWriter.pipe(fs.createWriteStream('sellerTable.csv'));
      while (groupId <= 999) {
        sellerWriter.write({
          sellerId: `${groupId}_${sellerId}`,
          name: faker.name.findName(),
          password: faker.internet.password(),
          email: faker.internet.email(),
          ip: faker.internet.ipv6(),
        });
        sellerId += 1;
        if (sellerId > 999) {
          groupId += 1;
          sellerId = 100;
        }
      }
    };
    await listings();
    console.log('Completed seeding of listing and homeData tables');
    await mortgageCodeTable();
    await taxCodeTable();
    console.log('Completed seeding of mortgage and taxCode tables');
    await sellerTable();
    console.log('Completed seeding all databases');
  } catch (err) {
    console.log(`Seeding failed: ${err}`);
  }
};

dataGen();
