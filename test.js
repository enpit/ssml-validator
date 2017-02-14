var api = require('./index');
var test = require('ava').test;

test('correct', t => t.is(api.correct('h*&y'), 'handy'));
test('correct (DE)', t => t.is(api.correct('h*&', 'de-DE'), 'hund'));
