class Users {
    constructor(name, room) {
        this.users = [];
    }
    addUser(id, name, room) {
        var user = { id, name, room };
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        var user = this.users.filter(user => id === user.id)[0];
        //delete this.users[this.users.indexOf(user)];
        if (user) {
            this.users = this.users.filter(user => id !== user.id);
        }
        return user;
    }
    getUser(id) {
        var user = this.users.filter(user => id === user.id)[0];
        return user;
    }
    getUserList(room) {
        var userList = this.users.filter(user => room === user.room);
        var namesList = userList.map(user => user.name);
        return namesList;
    }

}


module.exports = { Users };