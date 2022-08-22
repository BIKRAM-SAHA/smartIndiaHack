const { Router } = require("express");
const { addLearningPath, getLearningPath, getLearningPathByStudentId, getLearningPathByClassroomId, updateLearningPath } = require("../controller/learnpathController");

const router = Router();

router.post('/add', addLearningPath);
router.get('/get', getLearningPath);
router.get('/getByStudent', getLearningPathByStudentId);
router.get('/getByClassroom', getLearningPathByClassroomId);
router.put('/update', updateLearningPath);
// router.delete('/delete', deleteTestScore);

module.exports.learnPathApi = router;