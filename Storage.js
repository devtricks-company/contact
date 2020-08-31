class Storage{
    constructor(){
        this.PersonList = [];
    }

    addToStorage(PersonList){
        localStorage.setItem('personList',JSON.stringify(PersonList));
    }

    loadFromStorage(){
        if(localStorage.getItem('personList')){
            this.PersonList = JSON.parse(localStorage.getItem('personList'));
           
        }else{
            this.PersonList = [];
            
        }

        return this.PersonList;
    }
}