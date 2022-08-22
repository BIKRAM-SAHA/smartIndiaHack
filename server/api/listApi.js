const { Router } = require("express");
const { sendStudentDataSchool, sendStudentDataTeacher } = require("../controller/listController");

const router = Router();

router.get('/byTeacher', sendStudentDataTeacher);
router.get('/bySchool', sendStudentDataSchool);

module.exports.listApi = router;