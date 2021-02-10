// import PORT from '../secrets.js';
const Axios = require('axios');

const getRandomHome = async () => {
  let randomHome;
  // await Axios.get(`http://localhost:${PORT}/houses`)
  await Axios.get('/home')
    .then((homes) => {
      randomHome = homes.data[Math.floor(Math.random() * homes.data.length)];
    })
    .catch((err) => console.log(err));
  return randomHome;
};

const getTaxById = async (id) => {
  let taxId;
  await Axios.get(`/rates/taxes/${id}`)
    .then((tax) => {
      taxId = tax;
    })
    .catch((err) => console.log(err));
  return taxId.data[0];
};

const getMortgageTypes = async () => {
  let mortgageTypes;
  await Axios.get('/rates/mortgages/')
    .then((mortgages) => {
      mortgageTypes = mortgages;
    })
    .catch((err) => console.log(err));
  return mortgageTypes.data;
};

const getInterestRateByMortgageType = async (type) => {
  let effectiveRate;
  await Axios.get(`/rates/mortgages/${type}`)
    .then((mortgage) => {
      const { data } = mortgage;
      const [rate] = data;
      effectiveRate = rate;
    })
    .catch((err) => console.log(err));
  return effectiveRate;
};

const dbOps = {
  getRandomHome,
  getTaxById,
  getMortgageTypes,
  getInterestRateByMortgageType,
};

export default dbOps;
