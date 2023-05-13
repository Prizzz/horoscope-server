import rp from 'request-promise';
import express from 'express';
const url = 'https://ignio.com/r/export/utf/xml/daily/com.xml';

const app = express();
const port = 8080;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

rp(url).then(function (html) {
  app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(html);
  });
});
