const passwordHash = require('password-hash');

describe('password-hash ', () => {
  test('test case to generate hashed password', () => {
    const hashedPassword = passwordHash.generate('abcdef');
    expect(typeof (hashedPassword)).toBe('string');
  });
  test('test case to verify generated hashed password', () => {
    const hashedPassword = passwordHash.generate('abcdef');
    expect(passwordHash.verify('abcdef', hashedPassword)).toBe(true);
  });
});
