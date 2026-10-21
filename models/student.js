import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    name:{type: String, require: true},
    email:{type: String, require: true},
    phone:{type: Number, require: true},
    city:{type: String, require: true},
    category:{type: String, require: true}

})

const Student = mongoose.model("student", studentSchema);

export default Student;

