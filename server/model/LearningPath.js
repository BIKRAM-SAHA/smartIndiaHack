const mongoose = require("mongoose");

const learningPathSchema = new mongoose.Schema({
    classroomId: mongoose.Schema.Types.ObjectId,
    studentId: mongoose.Schema.Types.ObjectId,
    learningOutcomes: [{
        isDone: Boolean,
        name: String
    }],
    score: Number
});

module.exports.LearningPath = mongoose.model('learningpath', learningPathSchema);