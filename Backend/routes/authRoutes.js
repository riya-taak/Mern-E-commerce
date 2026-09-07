import express from "express";
import { signupUser , loginUser ,allUser , updateUser,deleteUser} from "../controllers/authController.js";



const router = express.Router();


router.post('/signup',signupUser);
router.post('/login',loginUser);
router.get('/all-user',allUser);
router.put('/update-user/:id',updateUser);
router.delete('/delete-user/:id',deleteUser);




export default router;