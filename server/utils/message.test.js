var expect = require('expect');

var { generateMsg } = require('./message');

describe('genrate message', () => {
    it('should genrate correct message object', () => {
        var msg = generateMsg('Me','OK');
        expect(msg.from).toBe('Me');
        expect(msg.text).toBe('OK');
        expect(msg.createdAt).toExist().toBeA('number');

    });
});