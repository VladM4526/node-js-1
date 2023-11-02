const contacts = require("./contacts/contacts");
console.log(contacts);

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --contactId <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
async function invokeAction({ action, contactId, name, email, phone }) {
  switch (action) {
    case "list":
      const contactDate = await contacts.listContacts();
      break;
    case "get":
      const contactIdCode = await contacts.getContactById(contactId);
      return console.log(contactIdCode);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      break;

    case "remove":
      const removeContact = await contacts.removeContact(contactId);
      return console.log(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const options = program.opts();
invokeAction(options);
