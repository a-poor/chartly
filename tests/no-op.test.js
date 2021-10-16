const greeter = require('../dist/index');

test('greeter', () => {
  expect(greeter.hello('World')).toBe('Hello World!');
});
