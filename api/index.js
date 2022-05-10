const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const path = require("path");

dotenv.config();
const app = express();
app.use(express.json());


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL).then(()=>{
      console.log("Connected to the database...");
  }).catch((err)=>{
      console.log('Connection unsuccessful...')
  })
}

app.use("/api/auth", authRoute);

app.listen("4000", ()=>{
    console.log('Backend is running...')
})