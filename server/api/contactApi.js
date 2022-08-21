const { Router } = require("express");
const { storeContactMessage } = require("../controller/contactController");

const router = Router();

router.post('/', storeContactMessage);

module.exports.contactApi = router;