const database = require('../models/UserRegistrationSchema');
const jwt = require('jsonwebtoken');
const UserDetailsMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwttokens;
        const verifyUser = await jwt.verify(token, process.env.SECURITY);
        const rootUser = await database.findOne({ _id: verifyUser._id, "tokens.token": token });
        if (!rootUser) {
            throw new Error('root User not found')
        }
        req.token = token;
        req.rootUser = rootUser;
        req.Userid = rootUser._id;
        next();
    } catch (error) {
        res.status(403).send('User not login');
    }
}
module.exports = UserDetailsMiddleware;