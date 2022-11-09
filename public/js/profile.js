const apiKey = `244272974957717`;
const cloudName = `dwe2wo8w5`;

const addPicBtn = document.querySelector(`#addPic`);
const picForm = document.querySelector(`#picForm`);
const editPicBtn = document.querySelector(`#editPic`);
const submitPicBtn = document.querySelector(`#submitPic`);
const profilePicFile = document.querySelector(`#profilePic`)

// hides the add button and pulls up form/edit button
addPicBtn.addEventListener(`click`, function(event) {
    console.log(picForm.className, editPicBtn.className)
    event.preventDefault();
    addPicBtn.className = `hidden`
    picForm.className = `shown`
});

submitPicBtn.addEventListener(`click`, function(event) {
    event.preventDefault();
    console.log(profilePicFile.value)
    editPicBtn.className = `shown`
});



