# Handy Value Validator 1.0.1

## Use cases:

### `String` type:

- `String` - value is String
- `='[String]'` - value equals to [String]
- `!='[String]'` - value do not equal to [String]

Use example: `String|!='Hello'|='World'`

### `Number` type:

- `Number` - value is Number
- `<[Number]` - value is smaller than [Number]
- `>[Number]` - value is bigger than [Number]
- `=[Number]` - value equals to [Number]

Use example: `Number|>15|<30`

### `Array` type:

- `Array` - value is Array
- `<[Number]` - Array have less than [Number] elements
- `>[Number]` - Array have more than [Number] elements
- `=[Number]` - Array have exactly [Number] elements

Use example: `Array|<10`

### `Object` type:

- `Object` - value is Object

Use example: `Object`

**IMPORTANT:** Always returns `false` if `_falseOnObject` is set to true!

### `Undefined` type:

- `Undefined` - value is Undefined

Use example: `Undefined`

### `Null` type:

- `Null` - value is Null

Use example: `Null`

### `Boolean` type:

- `Boolean` - value is Boolean

Use example: `Boolean`

### `isEqualTo` special type:

- `isEqualTo` - checks if value is equal to one of provided elements (in v1: only strings)

Use example: `isEqualTo|'123'|'String'|'Value3'`

## Plan for v2:

- [ ] New String validators
  - [ ] `=[Number]` - value length is equal to [Number]
  - [ ] `~'[String]'` - value contains [String]
  - [ ] `!~'[String]'` - value do not contains [String]
  - [ ] `^'[String]'` - value starts with [String]
  - [ ] `!^'[String]'` - value do not starts with [String]
  - [ ] `$'[String]'` - value ends with [String]
  - [ ] `!$'[String]'` - value do not ends with [String]
- [ ] New Number validators
  - [ ] `<=[Number]` / `=<[Number]` - value is equal or smaller than [Number]
  - [ ] `>=[Number]` / `=>[Number]` - value is equal or bigger than [Number]
- [ ] New Array validators
  - [ ] `<=[Number]` / `=<[Number]` - Array have exactly or less than [Number] elements
  - [ ] `>=[Number]` / `=>[Number]` - Array have exactly or more than [Number] elements
- [ ] Groups
- [ ] Numbers handling
  - [ ] Scientific notation number
  - [ ] Handling `,` as `.` in Float numbers
- [ ] Strings handling
  - [ ] Throw Error if string is not escaped with apostrophes
  - [ ] Escaping of `'` character
- [ ] isEqualTo handling
  - [ ] More values types compatibility
