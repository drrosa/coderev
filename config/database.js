const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', () => {
  // eslint-disable-next-line no-console
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
