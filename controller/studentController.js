import Student from "../models/student.js";

export const getStudent = async ( req, res) =>{

    try{

        const {search, sort, city, category, page=1, limit=5} = req.query

        const filter = {};

        if(search){
            filter.$or = [
                {name:{$regex:search, $options: " i"}},
                {email:{$regex:search, $options: " i"}}
            ];
        }

        if(city){

            filter.city = { $regex: `^${city}$`, $options: "i" };
        }

        if(category){

            filter.category = {
                $regex: `^${category}$`,
                $options: "i"
            }
        }

        const sortOption = sort === "desc" ? {name : -1} : {name : 1};

        const cuurentPage = Math.max(1, parseInt(page,10) || 1);

        const perPage = Math.min(100, Math.max(1, parseInt(limit,10) || 5))

        const skip = (cuurentPage - 1) * page;

        const [students, total] = await Promise.all([
            Student.find(filter).sort(sortOption).skip(skip).limit(perPage),
            Student.countDocuments(filter)
        ]);

        res.status(200).json({
            success : true,
            total,
            cuurentPage,
            totalPages: Math.ceil(total / perPage),
            limit: perPage,
            data: students
        });



    }catch(err){

     res.status(500).json({
            success: false,
            message: err.message
        });
        
    }

}

export const getStudentByID = async ( req, res) =>{

    try{

        const student = await Student.findById(req.params.id);

        if(!student){
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success : true,
            data : student
        });



    }catch(err){

     res.status(500).json({
            success: false,
            message: err.message
        });
        
    }

}

export const createStudent = async ( req, res) =>{

    try{

        const student = await Student.create(req.body);

        res.status(201).json({
            success : true,
            message: "Student added successfully",
            data : student 
        });



    }catch(err){

     res.status(400).json({
            success: false,
            message: err.message
        });
        
    }

}

export const updateStudent = async ( req, res) =>{

    try{

        const student = await Student.findByIdAndUpdate(req.params.id, req.body,{new:true , runValidators:true});

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success : true,
            message: "Student updated successfully",
            data : student
        });



    }catch(err){

     res.status(400).json({
            success: false,
            message: err.message
        });
        
    }

}

export const deletetudent = async ( req, res) =>{

    try{

        const student = await Student.findByIdAndDelete(req.params.id);

         if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success : true,
            message: "Student deleted successfully"
        });



    }catch(err){

     res.status(400).json({
            success: false,
            message: err.message
        });
        
    }

}
