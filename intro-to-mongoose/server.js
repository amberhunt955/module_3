require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connection;
const connectToDB = require("./config/db");
const Tweet = require("./models/Tweet");

const app = express();

//& DATA
const manyTweets = [
  {
    title: "Deep Thoughts",
    body: "Friends, I am the realest coder alive",
    author: "Arthur",
  },
  {
    title: "Sage Advice",
    body: "Friends, I am awesome and you are too",
    author: "Arthur",
    likes: 20,
  },
  {
    title: "Is TI the Jadakiss of the South",
    body: "TI is severely underrated and we need to fix that expeditiously",
    author: "Arthur",
    likes: 40,
  },
  {
    title: "Crypto",
    body: "Friends, I have spent $2300 to be one of the first people to own a random jpeg and that makes me cool",
    author: "Arthur",
    likes: 162,
  },
  {
    title: "Confusion",
    body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
    author: "Arthur",
    likes: -100,
  },
  {
    title: "Vespa",
    body: "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
    author: "Arthur",
    likes: 2,
  },
  {
    title: "Licensed",
    body: "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
    author: "Arthur",
    likes: 3,
  },
  {
    title: "Water",
    body: "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
    author: "Arthur",
  },
];

//* Query all documents and return the selected fields\
app.get("/", (req, res) => {
  Tweet.find({}, "title body")
    // if database transaction succeeds
    .then((tweets) => {
      res.send(tweets);
    })
    // if database transaction fails
    .catch((error) => {
      console.log(error);
    });
});

//* Using operator to filter queries
app.get("/trending", (req, res) => {
  Tweet.find({ likes: { $gte: 20 } })
    // if database transaction succeeds
    .then((tweets) => {
      res.send(tweets);
    })
    // if database transaction fails
    .catch((error) => {
      console.log(error);
    });
});

//* Find all Tweets in db
app.get("/tweets", (req, res) => {
  Tweet.find({})
    // if database transaction succeeds
    .then((tweets) => {
      res.send(tweets);
    })
    // if database transaction fails
    .catch((error) => {
      console.log(error);
    });
});

// * Create many Tweets
app.get("/seed", (req, res) => {
  Tweet.insertMany(manyTweets)
    // if database transaction succeeds
    .then((tweets) => {
      console.log(tweets);
      res.redirect("/tweets");
    })
    // if database transaction fails
    .catch((error) => {
      console.log(error);
    });
});

//* Create a single tweet
app.get("/tweet", (req, res) => {
  const myFirstTweet = {
    title: "Life Update",
    body: "Friends, I am happy today",
    author: "Arthur",
    likes: 21,
  };

  Tweet.create(myFirstTweet)
    .then((tweet) => {
      console.log(tweet);
      res.send(tweet);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log(`This runs if the promise is completed or rejected.`);
    });
});

//* Search or filter by the title
app.get("/tweets/:title", (req, res) => {
  Tweet.find({ title: req.params.title })
    // if database transaction succeeds
    .then((tweet) => {
      res.send(tweet);
    })
    // if database transaction fails
    .catch((error) => {
      console.log(error);
    });
});

//? =================== WEDNESDAY ===================
//! CREATING TWEETS
//* CREATE MANY TWEETS
// Tweet.insertMany(manyTweets)
//   // if database transaction succeeds
//   .then((tweets) => {
//     console.log(tweets);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

//* CREATE A SINGLE TWEET
// const myFirstTweet = {
//     title: "Deep Thoughts",
//     body: "Friends, I am the realest coder alive",
//     author: "Arthur",
//   };

// Tweet.create(myFirstTweet)
// .then(tweet => {
//     console.log(tweet);
// })
// .catch((error) => {
//     console.error(error)
// })
// .finally(() => {
//     console.log('this runs if the promise is completed or rejected');
// })

//! FINDING TWEETS
//* FIND ALL TWEETS IN DB
// Tweet.find({})
// // if database transaction succeeds
// .then((tweets) => {
//   console.log(tweets)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })

//* RETURN ONLY THE SPECIFIED FIELDS
// Tweet.find({}, "title body")
// // if database transaction succeeds
// .then((tweets) => {
//   console.log(tweets)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })

//* LOOK FOR A SPECIFIC TWEET
// Tweet.find({ title: "Water" })
// // if database transaction succeeds
// .then((tweet) => {
//   console.log(tweet)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })

//* TWEETS WITH 20 OR MORE LIKES
// Tweet.find({ likes: { $gte: 20 } })
// // if database transaction succeeds
// .then((tweets) => {
//   console.log(tweets)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })

//! DELETING TWEETS
//* FIND ONE AND REMOVE
// Tweet.findOneAndRemove({ title: "Deep Thoughts" })
// // if database transaction succeeds
// .then((tweet) => {
//   console.log(tweet)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })
//? =========================================================

//& === LISTEN AT DESIGNATED PORT
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}...`);
  connectToDB();
});
