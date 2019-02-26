var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject Non-string values', () => {
       expect(isRealString(3)).toBe(false);
    });
    it('should reject strings with only spaces', () => {
        expect(isRealString('   ')).toBe(false);
    });
    it('should allow strings with non-space characters', () => {
        expect(isRealString('Hello')).toBe(true);
    });
});
