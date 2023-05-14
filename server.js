const rp = require('request-promise');
const CronJob = require('cron').CronJob;
const url = 'https://ignio.com/r/export/utf/xml/daily/com.xml';

function getData() {
  rp(url).then(function (data) {
    html = data;
  });
}

let html;
getData();

const job = new CronJob('00 00 00 * * *', function () {
  getData();
});
job.start();

const express = require('express');
const app = express();

app.all('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(html);
});
app.listen(process.env.PORT || 3000);
