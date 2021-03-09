"use strict";
const db = require("../db");
const { User } = require("../db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  const users = [];
  //USER INFO FOR CLAIRE
  const claire = await User.create({
    name: "Claire Giordano",
    email: "Cgiordano1@gmail.com",
    city: "New York",
    state: "NY",
    zipCode: "10019",
    password: "Claire",
    imgUrl:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFXsmj2gUhdBA/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=ehdUywqM6iY3w3AG96LflI_5_1Mjdzux3BaZRh3toHM",
    pushToken: "ExponentPushToken[NA_5A_L3ThvvLenHPwiOKJ]",
    googleId:
      "958905447792-btonq7mth3qcu7s7t10klummopl4t2n0.apps.googleusercontent.com",
  });
  users.push(claire);
}

async function runSeed() {
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    await db.close();
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
