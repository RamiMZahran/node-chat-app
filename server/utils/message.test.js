var expect = require('expect');

var { generateMsg , generateLocationMsg } = require('./message');

describe('genrate message', () => {
    it('should genrate correct message object', () => {
        var msg = generateMsg('Me','OK');
        expect(msg.from).toBe('Me');
        expect(msg.text).toBe('OK');
        expect(msg.createdAt).toExist().toBeA('number');

    });
});

describe('genrate location message', () => {
    it('should genrate correct location object', () => {
        var msg = generateLocationMsg('Me',5,10);
        expect(msg.from).toBe('Me');
        expect(msg.url).toBe('https://www.google.com/maps?q=5,10');
        expect(msg.createdAt).toExist().toBeA('number');

    });
});