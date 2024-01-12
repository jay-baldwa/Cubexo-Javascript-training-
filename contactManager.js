
const contactList = [];

function displayContact() {
    const content = document.getElementById('display-content');
    content.innerText = '';

    if (contactList.length === 0) {
        content.innerText = 'Contact List is empty!';
    } else {
        let contactC = 'Contacts to be completed:';
        for (let i = 0; i < contactList.length; i++) {
            contactC += `\n* ${contactList[i]}`;
        }
        content.innerText = contactC;
    }
}

function addContact() {
    const addContent = document.getElementById('add-contact');
    addContent.innerText = '';

    const newContact = prompt('Enter the new Contact:\n');
    if (newContact) {
        contactList.push(newContact);
        displayContact();
    }
}

function removeContact() {
    const removeContent = document.getElementById('remove-contact');
    removeContent.innerText = '';

    if (contactList.length === 0) {
        removeContent.innerText = 'Contact List is empty already, cannot remove Contact!';
        return;
    }

    const ContactNumber = Number(prompt("Enter the number of Contact you want to remove:"));
    if (ContactNumber < 1 || ContactNumber > contactList.length || isNaN(ContactNumber)) {
        removeContent.innerText = 'Invalid! Contact does not exist.';
        return;
    }

    const removedContact = contactList.splice(ContactNumber - 1, 1);
    removeContent.innerText = `${removedContact} removed successfully!`;
    displayContact();
}

