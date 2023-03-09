const express = require('express');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const SneaksAPI = require('sneaks-api');
const sneaks = new SneaksAPI();

const app = express();
app.use(cors());
app.use(express.json());


let mendata;
let data;
let Nike;

sneaks.getMostPopular(10, function(err, products){
   mendata = products;
   console.log('***********************************');
});

// sneaks.getProducts('Nike', 20, function (err, products) {
//   // console.log(products);
//    Nike = products
// });


sneaks.getProducts('New Balance', 18, function (err, products) {
  // console.log(products);
   data = products.concat(mendata)
   console.log(data)
});

app.get('/men', (req, res) => {
  res.json({ data: data });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} .`);
});
