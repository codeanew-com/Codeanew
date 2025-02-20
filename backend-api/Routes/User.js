const express = require("express")

const router = express.Router()

const userController = require('../Controller/User')
const {VerifyToken} = require('../Middlewares/AuthMiddlewares');

const multer = require('multer');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
  
  const upload = multer({ storage: storage });



router.get("/" , userController.userHome  )

// router.post("/add" ,  upload.single('file-0'),  userController.createUser )
router.post("/add" ,  VerifyToken ,  userController.createUser )
router.post("/login" ,   userController.login )
// router.post("/forgetpassword" ,   userController.forgetPassword )

router.post("/contactus" ,   userController.contactUs )

router.get("/get/all" , VerifyToken ,  userController.getAllUsers )



router.get('/check-email/:email',VerifyToken , userController.checkEmailExistance);



// router.get("/get/:id" , userController.getOneUser )
// router.delete("/delete/:id" , userController.deleteUser )





module.exports = router