const phonebook = require("../phonebook");
const Contact = require("../models/Contact");
console.log(phonebook.getPhonebook());

module.exports = {
  index: (req, res) => {
    res.render("index", {
      contacts: phonebook.getPhonebook()
    });
  },
  addPhonebookPost: (req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    let conact = new Contact(name, number);
    phonebook.addNumber(conact);
    res.redirect("/");
  },
};
