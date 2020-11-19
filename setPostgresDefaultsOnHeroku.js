module.exports = function setPostgresDefaultsOnHeroku() {
  if (process.env.DATABASE_URL) {
    const url = require('url');

    // Extract the connection information from the Heroku environment variable
    // https://devcenter.heroku.com/changelog-items/438
    const { hostname, pathname, auth } = url.parse(process.env.DATABASE_URL);
    const [username, password] = auth.split(':');

    // Set standard environment variables
    process.env.PGHOST = hostname;
    process.env.PGDATABASE = pathname.slice(1);
    process.env.PGUSERNAME = username;
    process.env.PGPASSWORD = password;
  }
};
