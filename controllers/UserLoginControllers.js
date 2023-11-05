const database = require('../models/UserRegistrationSchema');
const comparePasswordfunction = require('../helper/ComparePassword');
const UserLoginControllers = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const findEmail = await database.findOne({ email });
            if (findEmail) {
                const hashingpassword = await findEmail.password;
                const comparepassword = await comparePasswordfunction(password, hashingpassword);
                if (comparepassword) {
                    const token = await findEmail.genratetokens();
                    res.cookie('jwttokens', token);
                    res.status(200).send('Login Sucessfully')
                } else {
                    res.status(402).send("Invalid Login Details");
                }

            } else {
                res.status(402).send("Invalid Login Details");
            }

        } else {
            res.status(500).send("All field require");
        }

    } catch (error) {
        console.log('Some technical issue');
    }
}
module.exports = UserLoginControllers;