const expect = require('expect');



const { Users } = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Rami',
            room: 'BlaBlaBla'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for Node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for React course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });

    it('should remove a user', () => {
        var user = users.removeUser('1');
        expect(user).toEqual({
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        });
        expect(users.users.length).toEqual(2);
    });

    it('should not remove user', () => {
        var user = users.removeUser('4');
        expect(users.users.length).toEqual(3);
    });

    it('should find user', () => {
        var user = users.getUser('1');
        expect(user).toEqual({
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        });

    });

    it('should not find user', () => {
        var user = users.getUser('4');
        expect(user).toEqual(undefined);
    });



});

