const { Router } = require("express");
const { addLearningPath, getLearningPath, updateLearningPath } = require("../controller/learnpathController");

const router = Router();

router.post('/add', addLearningPath);
router.get('/get', getLearningPath);
router.put('/update', updateLearningPath);
// router.delete('/delete', deleteTestScore);

module.exports.learnPathApi = router;