class Person{
    constructor(name,lastName,age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.contactList = [];
    }
    add(contact){
       this.contactList = [...this.contactList,contact];
       return this.contactList;
       
    }
}