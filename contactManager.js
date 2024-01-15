
const contactList = [];

function displayContact() {
    const content = document.getElementById('display-content');
    content.innerText = '';

    if (contactList.length === 0) {
        content.innerText = 'Contact List is empty!';
    } else {
        let contactC = 'All the contents are:';
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
        contactList.push(newContact);   // will push the added contact to the array of contacts
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


    // will take the name of the contact to be removed as imput from the user
    const contactName = prompt("Enter the name of Contact you want to remove:");

    // this loop will check the name entered with the contacts in the array and if matched, will remove the contact
    for (let i = 0; i < contactList.length; i++) {

        if (contactName === contactList[i]) {
            contactList.splice(i, 1);
        }

    }

    removeContent.innerText = `Contact removed successfully!`;
    displayContact();
}

