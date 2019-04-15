const Obniz = require('obniz');

const options = process.env.OBNIZ_ACCESS_TOKEN
  ? {
      access_token: process.env.OBNIZ_ACCESS_TOKEN
    }
  : {};
const obniz = new Obniz(process.env.OBNIZ_ID, options);
obniz.onconnect = async function() {
  obniz.display.print('hello!');
};
