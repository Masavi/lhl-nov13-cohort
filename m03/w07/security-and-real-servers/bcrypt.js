const bcrypt = require('bcrypt');
const PASSWORD = 'myPlainPassword!';
const SALT_ROUNDS = 10;

console.log('Original password:', PASSWORD);

const salt = bcrypt.genSaltSync(SALT_ROUNDS);
console.log('salt:', salt);

const hash = bcrypt.hashSync(PASSWORD, salt);
console.log('Hashed password:', hash);

const isMatch = bcrypt.compareSync('myPlainPassword!', hash);
console.log(isMatch);

