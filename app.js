

document.addEventListener('DOMContentLoaded',() => {
    const storage = new Storage();
 const personList = storage.loadFromStorage();
    const uiLoad = new UI();
    uiLoad.addLoadPersons(personList);
})


//add event handler
const ui = new UI();
ui.addSubmitEventHandler();

