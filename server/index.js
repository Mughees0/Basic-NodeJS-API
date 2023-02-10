const express = require("express");
const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/stock", (req, res) => {
  res.status(200).send({
    ticker: "AAPL",
    price: 270,
    float: "300M",
    volume: "5M",
  });
});

app.post("/stock/buy", (req, res) => {
  const { price } = req.body;
  const { ticker } = req.body;

  if (!price && !ticker) {
    res.status(418).send({
      message: "Please give the ticker and price",
    });
  } else {
    res.status(200).send({
      tradelog: `bought ${ticker} at ${price}`,
    });
  }
});

app.listen(PORT, () => console.log(`Now working on ${PORT}`));
