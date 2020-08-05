//si no estamos en production
if (process.env.NODE_ENV !== "production") {
  //usa mis variables locales
  require("dotenv").config();
}
module.exports = {
  MONGO_URI: process.env.MONGO_URI,
};
