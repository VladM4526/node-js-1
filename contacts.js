// contacts.js

import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");

const updateListContact = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const contactDate = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// TODO: задокументувати кожну функцію
export const listContacts = async () => {
  // ...твій код. Повертає масив контактів.
  const contacts = await contactDate();
  return console.table(contacts);
};

export const getContactById = async (contactId) => {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contact = await contactDate();
  const result = contact.find((item) => item.id === contactId);
  return result || null;
};

export const removeContact = async (contactId) => {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await contactDate();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateListContact(contacts);
  return result;
};

export const addContact = async ({ name, email, phone }) => {
  // ...твій код. Повертає об'єкт доданого контакту.
  const contacts = await contactDate();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  return newContact;
};
