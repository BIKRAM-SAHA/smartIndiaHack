const { Classroom } = require("../model/ClassRoom");
const { Teacher } = require("../model/Teacher");
const { Student } = require("../model/Student");
const { LearningPath } = require("../model/LearningPath");
const { User } = require("../model/User");

const createClassroom = async(req,res) => {
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const { subject , learningOutcomes } = req.body;
    
    const newClassroom = await Classroom.create({ 
        subject: subject,
        learningOutcomes: learningOutcomes,
        school: req.user.userInfo._id
    });
    res.status(200).json({ newClassroom: newClassroom });
}

const addTeacher = async(req , res) =>{
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const {classroomId , teacherId} = req.body;
    let classroom = await Classroom.findOne({ 
        school: req.user.userInfo._id,
        _id : classroomId
    });
    let teachers = classroom?.teachers;
    if(teachers?.includes(teacherId) == false){
        teachers.push(teacherId);
    }
    classroom.teachers = teachers;
    let teacher = await User.findById(teacherId);
    let teacherData = await Teacher.findById(teacher.userInfo);
    let classrooms = teacherData?.classRooms;
    if(classrooms?.includes(classroomId) == false){
        classrooms.push(classroomId);
    }
    teacherData.classRooms = classrooms;
    await Classroom.findByIdAndUpdate({_id:classroomId}, classroom);
    await Teacher.findByIdAndUpdate({_id:teacher.userInfo}, teacherData);
    return res.status(200).json(classroom);
}
const addStudent = async(req , res) =>{
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const {classroomId , studentId} = req.body;
    let classroom = await Classroom.findOne({ 
        school: req.user.userInfo._id,
        _id : classroomId
    });
    let students = classroom?.students;
    if(students?.includes(studentId) == false){
        const learningOutcomes = classroom.learningOutcomes.map((lo) => {
            return { name: lo, isDone: false }
        });
        students.push(studentId);
        const newLearningPath = await LearningPath.create({ 
            classroomId,
            studentId,
            learningOutcomes,
            score: 0
        });
    }
    classroom.students = students;
    let student = await User.findById(studentId);
    let studentData = await Student.findById(student.userInfo);
    let classrooms = studentData?.classRooms;
    if(classrooms?.includes(classroomId) == false){
        classrooms.push(classroomId);
    }
    studentData.classRooms = classrooms;
    await Classroom.findByIdAndUpdate({_id:classroomId}, classroom);
    await Student.findByIdAndUpdate({_id:student.userInfo}, studentData);
    return res.status(200).json(classroom);

}

const getClassroom = async(req,res) => {
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const classroom = await Classroom.find({ 
        school: req.user.userInfo._id
    });
    return res.status(200).json(classroom);
}

const getTeacher = async(req,res) => {
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const teachers = await Teacher.find({ 
        school: req.user.userInfo._id
    });
    return res.status(200).json(teachers);
}

module.exports.createClassroom = createClassroom;
module.exports.addTeacher = addTeacher;
module.exports.addStudent = addStudent;
module.exports.getTeacher = getTeacher;
module.exports.getClassroom = getClassroom;