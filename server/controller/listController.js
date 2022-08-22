const { Classroom } = require("../model/ClassRoom");
const { Student } = require("../model/Student");
const { Teacher } = require("../model/Teacher");
const { User } = require("../model/User");

const sendStudentDataTeacher = async (req, res) => {
    try 
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { teacherId } = req.body;

        const teacher = await User.findById(teacherId);
        const teacherData = await Teacher.findById(teacher.userInfo);
        let students = [];
        for(i of teacherData.classRooms)
        {
            // console.log(i);
            const classroom = await Classroom.findById(i);
            for(j of classroom.students)
            {
                const student = await User.findById(j);
                const studentData = await Student.findById(student.userInfo);
                students.push(studentData);
            }
        }
        return res.status(200).json({ message: "Students fetched successfully", students });
    } 
    catch(err) 
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const sendStudentDataSchool = async (req, res) => {
    try 
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { schoolId } = req.body;

        const students = await Student.find({ school: schoolId });

        if(students.length) return res.status(200).json({ message: "Students fetched successfully", students });
        else return res.status(404).json({ message: "No students for given school", students })
    } 
    catch(err) 
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports.sendStudentDataSchool = sendStudentDataSchool;
module.exports.sendStudentDataTeacher = sendStudentDataTeacher;