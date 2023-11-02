import * as contactDate from "./contacts/contacts.js";

// TODO: рефакторити
const invokeAction = async ({ action, contactId, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactDate.listContacts();
      break;
    case "get":
      const contactIdCode = await contactDate.getContactById(contactId);
      return console.log(contactIdCode);

    case "add":
      const newContact = await contactDate.addContact({ name, email, phone });
      break;

    case "remove":
      const removeContact = await contactDate.removeContact(contactId);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
invokeAction();
