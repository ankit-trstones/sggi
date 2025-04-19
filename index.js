
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/ping", (req, res) => {
  res.json({ success: true, message: "API is live" });
});

app.post("/new-order", (req, res) => {
  console.log("🔔 New order received:", req.body);
  res.json({
    success: true,
    message: "Order received",
    data: req.body,
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
