require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./route/contactRoute");

const app = express();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:3000",
  "https://prithviraj-portfolio-client.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/", contactRoute);

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
