const database = require('../db/Connection');
const jwt = require('jsonwebtoken');

const UserRegistrationSchema = new database.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true
    },
    role:{
        type: Number,
        trim: true,
        unique: true,
        default:0
    },
    phone: {
        type: Number,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
    },
    tokens: [
        {
            token: {
                type: String,
                trim: true,
            }
        }

    ]
}, { timestamps: true });

UserRegistrationSchema.methods.genratetokens = async function () {
    try {
        const token = await jwt.sign({ _id: this._id.toString() }, process.env.SECURITY);
        this.tokens = this.tokens.concat({ "token": token });
        await this.save();
        return token;

    } catch (error) {
        console.log('Some technical issue Token');
    }
}

const UserRegistrationModel = new database.model('UserRegistrationSchema', UserRegistrationSchema);
module.exports = UserRegistrationModel;