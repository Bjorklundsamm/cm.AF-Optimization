const { Client } = require('cassandra-driver');

const dbConnect = new Client({
  contactPoints: ['127.0.0.1:9042'],
  localDataCenter: 'datacenter1',
  keyspace: 'affordability_calculator',
});

module.exports = dbConnect;
