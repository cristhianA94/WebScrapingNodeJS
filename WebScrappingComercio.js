const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
//necesario para facilitar las paticiones
const axios = require("axios").default;
//para manejar el html obtenido
const cheerio = require("cheerio");
//cron jobs para ejecutar cierto tiempo
const cron = require("node-cron");
//extraer modelos
const { ComercioNew } = require("./models");
/* me conecto a mi servidor */
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
/* Empezemos con el web Scraping */
/* para controlar el tiempo https://crontab.guru/#*_*_*_*_* */
// * */4 * * *  cada cuatro horas
cron.schedule("* * * * * *", async () => {
  const url = "https://elcomercio.pe";
  console.log(`Extrayendo datos de ${url}`);
  const html = await axios.get(url);
  const $ = cheerio.load(html.data);
  const titles = $(".featured-story");
  //iteramos los titles
  titles.each((index, element) => {
    const bnew = {
      title: $(element).text().trim(),
      link: `${url}${element.children[1].attribs.href}`,
    };
    ComercioNew.create([bnew]);
    /* console.log(bnew); */
  });
});
