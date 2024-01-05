function Actions (select, insert, update, remove){
    this.select = select;
    this.insert = insert;
    this.update = update;
    this.remove = remove; 
}

function User(userName, email, password, active){
    this.userName = userName;
    this.email = email; 
    this.password = password; 
    this.active = active; 
}

User.prototype = Actions.select; 



const adm = new User('Dudu', 'dudufff@gmail.com' , '1234', true)

console.dir(adm)