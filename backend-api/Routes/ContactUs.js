const express = require("express")

const router = express.Router()

const {SendcontactUs, GetAllcontactUsMsgs} = require('../Controller/ContactUs')
const {VerifyToken} = require('../Middlewares/AuthMiddlewares');



router.post("/send/message/hubspot", SendcontactUs);
router.get("/send/message/hubspot/all", VerifyToken, GetAllcontactUsMsgs);






module.exports = router