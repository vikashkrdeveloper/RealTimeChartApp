const bcrypt = require('bcrypt');
const ComparePasswordFunctions = async (password, hashpassword) => {
    try {
        const ComparePassword = await bcrypt.compare(password, hashpassword);
        return ComparePassword;

    } catch (error) {
        console.log('Some technical issue');
    }
}

module.exports = ComparePasswordFunctions;