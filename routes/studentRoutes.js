import express from 'express'

import {
    getStudent, getStudentByID, createStudent , updateStudent, deletetudent
} from "../controller/studentController.js"

const router = express.Router();

router.get("/", getStudent)
router.get("/:id", getStudentByID)
router.post("/", createStudent)
router.put("/:id", updateStudent)
router.delete("/:id", deletetudent)


export default router;