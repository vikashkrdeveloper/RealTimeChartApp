const bcrypt = require('bcrypt');
const HashingPasswordFunction = async (password) => {
    try {
        const salt = 12;
        const HashPassword = await bcrypt.hash(password, salt);
        return HashPassword;

    } catch (error) {
        console.log('Some technical issue ');
    }
}
module.exports = HashingPasswordFunction; 