const database = require('../models/UserRegistrationSchema');
const hashPasswordfunction = require('../helper/hash');
const UserRegistrationControllers = async (req, res) => {
    try {
        const { name, email, phone, username, password } = req.body;
        if (name && email && phone && username && password) {
            const findEmail = await database.findOne({ email });
            const findUsername = await database.findOne({ username });
            const findphone = await database.findOne({ phone });
            if (findEmail) {
                res.status(400).send('Email id Already exists');

            } else {
                if (findUsername) {
                    res.status(401).send('Username Already Exists');

                } else {
                    if (findphone) {
                        res.status(402).send('Phone Number  Already Exists');

                    } else {
                        const hashPassword = await hashPasswordfunction(password);
                        const insertdata = new database({ name, email, phone, username, password: hashPassword });
                        insertdata.save();
                        res.status(200).send('Registration Sucessfully');

                    }
                }
            }

        } else {
            res.status(500).send('All field require');
        }

    }
    catch (error) {
        console.log('Some technical issue' + error);
    }
}
module.exports = UserRegistrationControllers; 