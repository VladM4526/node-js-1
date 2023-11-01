// contacts.js

const fs = require("fs/promises");

const path = require("path");
const contactsPath = path.join(__dirname, "./db/contacts.json");

async function contactDate() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

// TODO: задокументувати кожну функцію
async function listContacts() {
  // ...твій код. Повертає масив контактів.
  const contacts = await contactDate();
  const result = contacts.find(
    (item) => item.id,
    item.name,
    item.email,
    item.phone
  );
  return result;
}

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await contactDate();
  const result = contacts.find((item) => item.contactId === contactId);
  return result || null;
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await contactDate();
  const index = contacts.findIndex((item) => item.contactId === contactId);
  if (index === -1) {
    return null;
  }

  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
  const contacts = await contactDate();
  const newContact = {
    name,
    email,
    phone,
  };
  books.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
