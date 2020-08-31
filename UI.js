class UI {
  constructor() {
    this.form = document.querySelector("form");
    this.inputName = document.querySelector("#name");
    this.inputLastName = document.querySelector("#lastName");
    this.ageInput = document.querySelector("#age");
    this.personUIList = document.querySelector('.person-list');
    this.personList = new Storage().loadFromStorage();
  }

  //display information in console.

  displayInformation(e) {
    console.log(this.inputName.value);
    console.log(this.inputLastName.value);
    console.log(this.ageInput.value);
  }


//add Person to ui
  addPersonUI() {
    const name = this.inputName.value;
    const lastName = this.inputLastName.value;
    const age = this.ageInput.value;
    const person = new Person(name, lastName, age);
    this.personList = [...this.personList, person];
    let trs = '';
    this.personList.forEach((item,index) => {
        trs += `
        <tr>
            <th scope="row">${++index}</th>
                <td>${item.name}</td>
                <td>${item.lastName}</td>
                <td>${item.age}</td>
                
        </tr>
        `;
    })

    this.personUIList.innerHTML = trs;
    console.log(this.personList);  
   
    const storage = new Storage()

    const loadStorage = storage.loadFromStorage();
    storage.addToStorage(this.personList);
    
  }

  addLoadPersons(personList){
    let trs = '';
    personList.forEach((item,index) => {
        trs += `
        <tr>
            <th scope="row">${++index}</th>
                <td>${item.name}</td>
                <td>${item.lastName}</td>
                <td>${item.age}</td>
                
        </tr>
        `;
    })
    this.personUIList.innerHTML = trs;
  }


//add eventlistern to form
  addSubmitEventHandler() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addPersonUI();
    });
  }
}
