const { Router } = require("express");
const passport = require('passport');
const { signupController, loginController, logoutController, authStatusController } = require("../controller/authController");

const router = Router();

router.post('/register', signupController)
router.post('/login', loginController); 
// In case of fail there will be 401 status code with a string response 'Unauthorised'
router.post('/logout', logoutController);
router.get('/authstatus', authStatusController);

module.exports.authApi = router;