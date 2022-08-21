const nodemailer = require('nodemailer');
const { genPassword } = require("../utils/genPassword");
const { ORG_EMAIL, ORG_PASSWORD } = require('../config/keys');
const {Teacher} = require('../model/Teacher');
const {Student} = require('../model/Student');
const {User} = require('../model/User');

const newStudentController = async (req, res) => {
    try 
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });
        if(req.user.userType !== 'School') return res.status(400).json({ message: "Only school can create new student" });

        const { name, degree, stream, rollNumber, email } = req.body;

        // check existing
        const existingUser1 = await User.findOne({ email: email });
        const existingUser2 = await Student.findOne({ rollNumber: rollNumber });
        if(existingUser1 || existingUser2)
        {
            console.log('[-] Roll Number or Email already exists !');
            return res.status(400).json({ message:"Roll Number or Email already exists !" });
        }

        const infoDoc = await Student.create({ 
            name,
            degree, 
            stream, 
            rollNumber, 
            school: req.user.userInfo._id
        });
        const password = genPassword();
        const newUser = await User.create({ 
            email: email,
            userType: 'Student',
            userInfo: infoDoc._id,
            password: password
        });

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: ORG_EMAIL,
                pass: ORG_PASSWORD,
            }
        });

        const emailMsg = `<h2>You have been registered with PRAGMATE under the institution ${req.user.userInfo.name}</h2>
        <p><b>Your role is: Student</b></p><br>
        <p><b>Your unique ID is: ${newUser._id}</b></p><br>
        <p><b>Your password is: ${newUser.password}</b></p><br>
        <p>Please login to your PRAGMATE account using the above credentials</p>`;

        const info = await transporter.sendMail({
            from: ORG_EMAIL, // sender address
            to: email, // list of receivers
            subject: "Credentials for using PRAGMATE", // Subject line
            html: emailMsg
        });

        res.status(200).json({ message: "Student Created" });
    } 
    catch (err) 
    {
        console.log('[-] Error while student creation');
        console.dir(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const newTeacherController = async (req, res) => {
    try 
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });
        if(req.user.userType !== 'School') return res.status(400).json({ message: "Only school can create new student" });

        const { name, email } = req.body;

        // check existing
        const existingUser1 = await User.findOne({ email: email });
        if(existingUser1)
        {
            console.log('[-] Email already exists !');
            return res.status(400).json({ message:"Email already exists !" });
        }

        const infoDoc = await Teacher.create({ 
            name,
            school: req.user.userInfo._id
        });
        const password = genPassword();
        const newUser = await User.create({ 
            email: email,
            userType: 'Teacher',
            userInfo: infoDoc._id,
            password: password
        });

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: ORG_EMAIL,
                pass: ORG_PASSWORD,
            }
        });

        const emailMsg = `<h2>You have been registered with PRAGMATE under the institution ${req.user.userInfo.name}</h2>
        <p><b>Your role is: Teacher</b></p><br>
        <p><b>Your unique ID is: ${newUser._id}</b></p><br>
        <p><b>Your password is: ${newUser.password}</b></p><br>
        <p>Please login to your PRAGMATE account using the above credentials</p>`;

        const info = await transporter.sendMail({
            from: ORG_EMAIL, // sender address
            to: email, // list of receivers
            subject: "Credentials for using PRAGMATE", // Subject line
            html: emailMsg
        });

        res.status(200).json({ message: "Teacher Created" });
    } 
    catch (err) 
    {
        console.log('[-] Error while teacher creation');
        console.dir(err);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports.newStudentController = newStudentController;
module.exports.newTeacherController = newTeacherController;
