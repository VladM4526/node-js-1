import { program } from "commander";
import * as contactDate from "./contacts.js";

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
      return console.log(newContact);

    case "remove":
      const removeContacts = await contactDate.removeContact(contactId);
      return console.log(removeContacts);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --contactId <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();
invokeAction(options);
