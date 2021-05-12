"use strict";
const db = require("../db");
const { User, Request, Post } = require("../db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");
  const users = [];
  const requests = [];
  const posts = [];
  //USER INFO FOR CLAIRE
  const claire = await User.create({
    name: "Claire Giordano",
    email: "Cgiordano1@gmail.com",
    fromCity: "New York",

    toCity: "Rejavik",
    state: "NY",
    zipCode: "10019",

    password: "Claire",
    sent_request: 2,
    sent_request: 3,
    imgUrl:
      "https://media-exp1.licdn.com/dms/image/C4D03AQHgqObsqX4UkQ/profile-displayphoto-shrink_400_400/0/1616798125873?e=1625097600&v=beta&t=_gA_VuB2PHIcgH7Gecfp00D5qEl_pYXBo_0domQ4jEg",
    // pushToken: "ExponentPushToken[NA_5A_L3ThvvLenHPwiOKJ]",
    // googleId:
    //   "958905447792-btonq7mth3qcu7s7t10klummopl4t2n0.apps.googleusercontent.com",
  });
  users.push(claire);

  const lucia = await User.create({
    name: "Lucia Vacchiano",
    email: "Lvachiano1@gmail.com",
    fromCity: "New York",

    toCity: "Rejavik",
    imgUrl:
      "https://media-exp1.licdn.com/dms/image/C4E03AQEtZ3eSVTuyAQ/profile-displayphoto-shrink_400_400/0/1594821847669?e=1625097600&v=beta&t=oPyTZsOB_f78ddW-QSCsvDgVirAX_LqlO9vz4rVslQI",
    password: "Lucia",
  });
  users.push(lucia);

  const jenna = await User.create({
    name: "Jenna Giordano",
    email: "Jgiordano1@gmail.com",
    password: "Jenna",
    imgUrl:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFZtqxdEXTYcA/profile-displayphoto-shrink_400_400/0/1565970616737?e=1622678400&v=beta&t=UYqm10cGJ7wxIMi1W8lrbueaWmRZTSp4eFu4Goy91LQ",
    fromCity: "New York",

    toCity: "London",
  });
  users.push(jenna);

  const ezriel = await User.create({
    name: "Ezriel Ciraco",
    email: "Eciraco1@gmail.com",
    password: "Ezriel",
    imgUrl:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFjTOP7DvRj8A/profile-displayphoto-shrink_400_400/0/1579647505989?e=1622678400&v=beta&t=x8K6ngz5aJ78TafJXO_-yRCdXt4WuCP-hdWJfh15Fy4",
    fromCity: "New Jersey",

    toCity: "Brussels",
  });
  users.push(ezriel);

  const zach = await User.create({
    name: "Zach Dulac",
    email: "Zdulac1@gmail.com",
    password: "Zach",
    fromCity: "New Jersey",

    toCity: "Singapore",
  });
  users.push(zach);

  // REQUESTS:
  const request1 = await Request.create({
    sent_request: 2,
    userId: 1,
  });
  requests.push(request1);

  //POSTS FAKE DATA

  const post1 = await Post.create({
    title: "  Northerin Lights",
    description: "go see northern lights in Iceland!",

    city: "Rejavik",
    date: "05/22/21",
    imgUrl: "https://media.timeout.com/images/105731796/630/472/image.jpg",
    userId: 2,
    hostId: 1,
  });

  posts.push(post1);

  const post2 = await Post.create({
    title: "See  Eiffel tower",
    description: "go see Eiffel tower in Paris!",

    city: "Paris",
    date: "05/12/21",
    imgUrl:
      "https://cdn.lifestyleasia.com/wp-content/uploads/2019/10/21224220/Winer-Parisienne.jpg",
    userId: 1,
    hostId: 2,
  });
  posts.push(post2);

  const post3 = await Post.create({
    title: "See to lunch near the London Eye",
    description: "go eat lunch near the London Eye then walk around",

    city: "London",
    date: "08/12/21",
    imgUrl: "https://assets.londonist.com/uploads/2019/11/i875/pink_eye.jpg",
    userId: 1,
    hostId: 2,
  });

  posts.push(post3);

  const post4 = await Post.create({
    title: "Central Park Day",
    description: "walk around central park then grab lunch",

    city: "New York",
    date: "09/12/21",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNwbdff2tngpWRGZF3MDYrBfb8Q365M-C-A&usqp=CAU",
    userId: 1,
    hostId: 2,
  });

  posts.push(post4);
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
