const { Classroom } = require("../model/ClassRoom");
const { Student } = require("../model/Student");
const { Test } = require("../model/Test");
const { User } = require("../model/User");

const addTestScore = async (req, res) => {
    try
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });
        if(req.user.userType !== 'School') return res.status(400).json({ message: "Permission Denied" });

        const { testName, classroomId, studentId, score } = req.body;

        // check existing test
        const existing = await Test.findOne({ testName: testName, classroomId: classroomId, studentId: studentId });
        if(existing) return res.status(400).json({ message: "This test data already exists. Try making an update request." })
        else
        {
            const newTest = await Test.create({ 
                testName, 
                classroomId,
                studentId,
                score
            });
            return res.status(200).json({ message: "Test data stored successfully", newTest });
        }

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const getScoresForStudent = async (req,res) => {
    try 
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { studentId } = req.body;
        const student = await User.findById(studentId).populate('userInfo');
        // console.log(student);
        const classrooms = student.userInfo.classRooms;
        let total = 0;
        let classroomScores = [];
        let testScores = [];
        for(i of classrooms)
        {
            const tests = await Test.find({ classroomId: i, studentId: studentId });
            const classroom = await Classroom.findById(i);
            let classroomTotal = 0;
            for(t of tests) 
            {
                total += t.score;
                classroomTotal += t.score;
                testScores.push({...t._doc, studentId: student, classroomId: classroom });
            }
            classroomScores.push({ classroom: classroom, tests: tests, score: classroomTotal });
        }
        return res.status(200).json({
            overallTotal: total,
            classroomWiseScores: classroomScores,
            testWiseScores: testScores
        });
    } 
    catch(err) 
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const updateTestScore = async (req, res) => {
    try
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });
        if(req.user.userType !== 'School') return res.status(400).json({ message: "Permission Denied" });

        const { testName, classroomId, studentId, score } = req.body;

        const data = await Test.findOne({ testName: testName, classroomId: classroomId, studentId: studentId });
        if(!data) return res.status(404).json({ message: "Test data not found" })
        else
        {
            const updatedData = await Test.updateOne({ 
                testName: testName, 
                classroomId: classroomId, 
                studentId: studentId 
            }, { score: score });
            return res.status(200).json({ message: "Test data updated successfully" });
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const deleteTestScore = async (req, res) => {
    try
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });
        if(req.user.userType !== 'School') return res.status(400).json({ message: "Permission Denied" });

        const { testName, classroomId, studentId } = req.body;

        const data = await Test.findOne({ testName: testName, classroomId: classroomId, studentId: studentId });
        if(!data) return res.status(404).json({ message: "Test data not found" })
        else
        {
            const deletedData = await Test.deleteOne({ 
                testName: testName, 
                classroomId: classroomId, 
                studentId: studentId 
            });
            return res.status(200).json({ message: "Test data deleted successfully" });
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports.addTestScore = addTestScore;
module.exports.getScoresForStudent = getScoresForStudent;
module.exports.updateTestScore = updateTestScore;
module.exports.deleteTestScore = deleteTestScore;