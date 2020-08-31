class Contact extends Person{
    constructor(name,lastName,mobile,tel,address,email){
        super(name,lastName);
        this.mobile = mobile;
        this.tel = tel;
        this.address = address;
        this.email = email;
    }
}