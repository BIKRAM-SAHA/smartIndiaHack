const { Classroom } = require("../model/ClassRoom");
const { Student } = require("../model/Student");
const { LearningPath } = require("../model/LearningPath");
const { User } = require("../model/User");

const addLearningPath = async (req, res) => {
    try
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { classroomId, studentId } = req.body;
        
        // check existing learning path
        const existing = await LearningPath.findOne({ classroomId: classroomId, studentId: studentId });
        if(existing) return res.status(400).json({ message: "This layer path already exists" })
        else
        {
            const classroom = await Classroom.findById(classroomId);
            const learningOutcomes = classroom.learningOutcomes.map((lo) => {
                return { name: lo, isDone: false }
            });
            const score = 0;
            const newLearningPath = await LearningPath.create({ 
                classroomId,
                studentId,
                learningOutcomes,
                score
            });
            return res.status(200).json({ message: "Layer Path stored successfully", newLearningPath });
        }

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const getLearningPath = async (req,res) => {
    try 
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { classroomId, studentId } = req.body;
        
        const learningPath = await LearningPath.findOne({ classroomId, studentId });

        if(!learningPath) return res.status(404).json({ message: "Learning path doesn't exist", learningPath })
        else return res.status(200).json({ message: "Learning Path fetched successfully", learningPath });
    } 
    catch(err) 
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

const updateLearningPath = async (req, res) => {
    try
    {
        if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });

        const { classroomId, studentId, learningOutcomes } = req.body;
        let score = 0;
        for(let i=0; i<learningOutcomes.length; i++)
        {
            if(learningOutcomes[i].isDone) score++;
        }
        score = score / learningOutcomes.length;

        const data = await LearningPath.findOne({ classroomId, studentId });
        if(!data) return res.status(404).json({ message: "Learning path doesn't exist" })
        else
        {
            const updatedData = await LearningPath.updateOne({ 
                classroomId: classroomId, 
                studentId: studentId 
            }, { learningOutcomes, score });
            return res.status(200).json({ message: "Learning path updated successfully", updatedData });
        }
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

// const deleteTestScore = async (req, res) => {
//     try
//     {
//         if(!req.user) return res.status(401).json({ message: "Unauthorized Access" });
//         if(req.user.userType !== 'School') return res.status(400).json({ message: "Permission Denied" });

//         const { testName, classroomId, studentId } = req.body;

//         const data = await Test.findOne({ testName: testName, classroomId: classroomId, studentId: studentId });
//         if(!data) return res.status(404).json({ message: "Test data not found" })
//         else
//         {
//             const deletedData = await Test.deleteOne({ 
//                 testName: testName, 
//                 classroomId: classroomId, 
//                 studentId: studentId 
//             });
//             return res.status(200).json({ message: "Test data deleted successfully" });
//         }
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json({ message: "Server Error" });
//     }
// }

module.exports.addLearningPath = addLearningPath;
module.exports.getLearningPath = getLearningPath;
module.exports.updateLearningPath = updateLearningPath;
// module.exports.deleteTestScore = deleteTestScore;