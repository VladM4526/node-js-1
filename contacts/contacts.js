// contacts.js

const fs = require("fs/promises");

const contactsPath = require("path");
const contacts = path.dirname("./db/contacts.json");

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код. Повертає масив контактів.
}

module.exports = {
  //   listContacts,
  contacts,
  contactsPath,
};

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}
