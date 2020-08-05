const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
/* me conecto a mi servidor */
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
//creo un mondelo y sus propiedades
const Cat = mongoose.model("Cat", { name: String });
//creo un registro
const kitty = new Cat({ name: "Garfield" });
//guardo el registro
kitty.save().then(() => console.log("El gato ha sido creado"));

//imprimo el registro
Cat.find().then(console.log);
