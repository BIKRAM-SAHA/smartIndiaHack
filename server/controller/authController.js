const nodemailer = require('nodemailer');
const { User } = require("../model/User");
const { School } = require("../model/School");
const { genPassword } = require("../utils/genPassword");
const { ORG_EMAIL, ORG_PASSWORD } = require('../config/keys');

const signupController = async (req, res) => {
    // send message containing uniqueId and password
    try
    {
        const { name, email } = req.body;

        // check existing
        const existingUser = await User.findOne({ email: email });
        if(existingUser)
        {
            console.log('[-] User already exists !');
            return res.status(400).json({ message:"User already exists !" });
        }

        // only school can signup, accounts of students and teachers will be created by school
        // and credentials would be sent to email (would be implemented in other routes)

        const infoDoc = await School.create({ name });
        const password = genPassword();
        const newUser = await User.create({ 
            email: email,
            userType: 'School',
            userInfo: infoDoc._id,
            password: password
        });

        // Use a messaging service to send uniqueId(newUser._id) and password(newUser.password or just password) to email(newUser.email)
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: ORG_EMAIL,
                pass: ORG_PASSWORD,
            }
        });

        const emailMsg = `<h2>Thank you for registering with PRAGMATE</h2>
        <p><b>Your Institution Name is: ${infoDoc.name}</b></p><br>
        <p><b>Your unique ID is: ${newUser._id}</b></p><br>
        <p><b>Your password is: ${newUser.password}</b></p><br>
        <p>Please login using the above credentials</p>`;

        const info = await transporter.sendMail({
            from: ORG_EMAIL, // sender address
            to: email, // list of receivers
            subject: "Your account credentials for using PRAGMATE", // Subject line
            html: emailMsg
        });

        res.status(200).json({ message: "SignUp Successful", name: infoDoc.name });
    }
    catch(err)
    {
        console.log('[-] Error while signing up');
        console.dir(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const loginController = (req,res) => {
    res.status(200).json({ message: "Login Successful", user: req.user });
}

const logoutController = (req,res) => {
    req.logout();

    req.session.destroy((err) => {
        if (!err) {
            res.status(200).clearCookie('connect.sid').json({ message: "Logout Successful" });
            console.log('Successfully logged out');
        } else {
            res.status(500).json({ message: `Error : ${err}` })
            console.log(err);
        }
    });
}

const authStatusController = (req,res) => {
    if(req.user) return res.status(200).json({ isLoggedIn: true, user: req.user });
    else return res.status(200).json({ isLoggedIn: false, user: req.user });
}

module.exports.loginController = loginController;
module.exports.signupController = signupController;
module.exports.logoutController = logoutController;
module.exports.authStatusController = authStatusController;