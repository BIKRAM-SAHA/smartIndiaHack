const { Router } = require("express");
const { addCocurr, getCocurr, deleteCocurr } = require("../controller/cocurrController");

const router = Router();

router.post('/create', addCocurr);
router.post('/get', getCocurr);
router.delete('/delete', deleteCocurr);

module.exports.cocurrApi = router;