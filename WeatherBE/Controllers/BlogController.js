const blogModel = require("../Models/Blogmodel");
const mongoose = require("mongoose");
blogModel.insertMany(
    [
      {
        username: new mongoose.Types.ObjectId("6833c8a2739411d5b2278f4b"),
        Heading: "Chasing Storms",
        Body: "Thunderstorms can be both mesmerizing and hazardous. In this post, we explore how they form, what makes them so electrifying, and how to stay safe when the skies turn dark. Plus, a look at the gear storm chasers use to document these natural wonders.",
      },
      {
        username: new mongoose.Types.ObjectId("68366e56a322138827d31bae"),
        Heading: "The Science Behind Sunshine",
        Body: "EEver noticed how your mood lifts on a bright, sunny day? You're not imagining it — sunshine triggers the release of serotonin in your brain. Discover how sunlight affects your body and mind, and how to enjoy its benefits while protecting your skin.",
      },
      {
        username: new mongoose.Types.ObjectId("68366e76a322138827d31bb1"),
        Heading: "Art of Weather Forecasting",
        Body: "Weather forecasting is both an art and a science. From satellite imagery to computer models, learn how meteorologists analyze data to predict everything from sunny skies to severe storms. Plus, tips on how to interpret weather forecasts for your daily life.",
      },
      {
        username: new mongoose.Types.ObjectId("68366e76a322138827d31bb1"),
        Heading: "Rainy Day Wonders",
        Body: "Ever wondered why raindrops are shaped like teardrops? Or how they form in the clouds? This post dives into the fascinating world of raindrops, their formation, and their impact on our environment.",
      },
    ],
    { ordered: false }
  )
  .then(() => {
    console.log("Sample blogs inserted successfully");
  })
  .catch((err) => {
    console.error("Error inserting sample blogs:", err);
  });
const readController = async (req, res) => {
  try {
    const blogs = await blogModel.find();
    console.log("Blogs fetched successfully:", blogs);
    res.status(200).json({
      message: "Blog read successfully",
      success: true,
    });
  } catch (err) {
    console.error("Read error:", err);
    res.status(500).json({ message: "Server error", success: false });
  }
};
module.exports = { readController };
