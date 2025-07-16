require("dotenv").config();
const express = require("express");
const router = require("./Routes/auth-router");
const { connectDB } = require("./Utils/db");
// require('dotenv').config()

const app = express();

app.use(router);

const PORT = process.env.PORT || 8000;
console.log(PORT);

// connectDB().then(()=>{
//     console.log("hadifhsofishf")
// })

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running  :${PORT}  and it  is working `);
  });
});
