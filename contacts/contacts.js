// contacts.js

import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");

export const contactDate = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// TODO: задокументувати кожну функцію
export const listContacts = async () => {
  // ...твій код. Повертає масив контактів.
  const contacts = await contactDate();
  const result = contacts.map((item) => {
    return {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
    };
  });

  return console.table(result);
};

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await contactDate();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await contactDate();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }

  const [result] = contacts.splice(index, -1);
  await fs.writeFile(contactsPath, JSON.stringify(index, null, 2));
  return result;
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
  const contacts = await contactDate();
  const newContact = {
    name,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return console.log(newContact);
}