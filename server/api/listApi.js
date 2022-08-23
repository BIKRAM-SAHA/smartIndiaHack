const { Router } = require("express");
const { sendStudentListToSchool, sendStudentListToTeacher, sendTeacherListToSchool } = require("../controller/listController");

const router = Router();

router.get('/teacherBySchool', sendTeacherListToSchool);
router.get('/studentBySchool', sendStudentListToSchool);
router.get('/studentByTeacher', sendStudentListToTeacher);

module.exports.listApi = router;