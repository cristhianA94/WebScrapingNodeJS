const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const axios = require("axios").default;
const cheerio = require("cheerio");
const cron = require("node-cron");
const { BreakingNew } = require("./models");
/* me conecto a mi servidor */
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
/* Empezemos con el web Scraping */
/* para controlar el tiempo https://crontab.guru/#*_*_*_*_* */
cron.schedule("* * * * * *", async () => {
  console.log("Cron Job Ejecutandose");
  const html = await axios.get("https://cnnespanol.cnn.com/");
  const $ = cheerio.load(html.data);
  const titles = $(".news__title");
  //iteramos los titles

  titles.each((index, element) => {
    if (index < 10) {
      const bnew = {
        title: $(element).text().trim(),
        link: $(element).children().attr("href").trim(),
      };
      BreakingNew.create([bnew]);
    }
  });
});
