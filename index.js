const rp = require('request-promise');
const cheerio = require('cheerio');
const table = require('cli-table');

let players = [];

const options = {
  url : `https://www.freecodecamp.org/forum/directory_items?period=weekly&order=likes_received&_=1552311933431`,
  json : true
};

rp(options)
  .then((data) => {
    let promises = [];
    let playerData = [];
    console.log(data);
  });
