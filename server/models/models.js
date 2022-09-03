const { Pool } = require('pg');

const PG_URI = 'postgres://smypmouo:mDwFacJXneuY_lf6qi0Yo9b1PrkDus2-@jelani.db.elephantsql.com/smypmouo';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

