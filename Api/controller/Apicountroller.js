const employee = require('../model/employee');
const path = require('path')
const bcrypt = require('bcryptjs')

//----------------------------------------Registation----------------------------------

const addemp = async (req, res) => {
    try {
        const { name, email, phone } = req.body
        const checkname = await employee.findOne({ name })
        if (checkname) {
            return res.status(201).json({ success: true, msg: "Name already exists" })
        }
        const checkemail = await employee.findOne({ email })
        if (checkemail) {
            return res.status(201).json({ success: true, msg: "Email already exists" })
        }
        const checkphone = await employee.findOne({ phone })
        if (checkphone) {
            return res.status(201).json({ success: true, msg: "Phone already exists" })
        }
        const image = req.file
        const emp = await new employee({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            image: image.path,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)) 
        })
        const result = await emp.save()
        res.status(200).json({ success: true, msg: "data added successfully", data: result,status:200 })

    }
    catch (ex) {
        console.log(ex);
        res.status(201).json({ success: false, msg: "data not save" ,status:201})
    }
}


//----------------------------------------Login-----------------------------------------
// const logemp =async(req ,res)=>{
//         try {
//             const { email, password } = req.body;
    
//             if (!(email && password)) {
//                 return res.status(201).json({ success: false, message: "All input are required"})
//             }
//             const users = await employee.findOne({ email })
            
//             if (users && (await bcrypt.compare(password, users.password))) {
//                 return res.status(200).json({ success: true, "user": users, status:200 });
//             }
//             return res.status(201).json({ success: false, message: "Invalid Credentials" });
    
//         }
//         catch (error) {
//             console.log(error);
//         }
// }

const logemp = async (req, res) => {
    try {
        employee.findOne({
            email: req.body.email,
        }, (err, data) => {
            if (data) {
                const hashpassword = data.password
                if (bcrypt.compareSync(req.body.password, hashpassword)) {
                    res.status(200).json({
                        status: 'success',
                        result: data,
                        message: "Login....",
                        status: 200
                    });
                } else {
                    res.status(201).json({
                        result: err,
                        message: "Invalid Password"
                    });
                }
            } else {
                res.status(201).json({
                    result: err,
                    message: "Invalid Email"
                });
            }
        })

    } catch(err) {
        console.log(err);
        res.status(201).json({
            result: err,
            message: "Not Register"
        });
    }
}




// ---------------------------------Get All data----------------------------


const getemp = async (req, res) => {
    try {
        const alldata = await employee.find()
        res.status(200).json({ success: true, msg: "fetch data", data: alldata })
    }
    catch (ex) {
        res.status(201).json({ success: false, msg: "Data not found" })
    }
}

//  ------------------------------Edit----------------------------------------
const edit = async(req, res) => {
        try{
            const id=req.params.id
            const editEmployee=await employee.findByIdAndUpdate(id);
            res.status(201).json({success:true, msg:"Employee succussfully Edited", data:editEmployee})
    
        } catch(ex){
    res.status(404).json({success:false, msg:"Employee Not Update"})
        }
    }


// --------------------------------Update---------------------------

const updateemp = async(req, res) => {
    try{
        const _id=req.params.id
        const updateEmployee=await employee.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(201).json({success:true, msg:"Employee succussfully Update", data:updateEmployee})

    } catch(ex){
res.status(404).json({success:false, msg:"Employee Not Update"})
    }
}


//--------------------------------------Delete------------------------------

const deleteemp = async(req, res) => {
    try{
        const alldata= await employee.findByIdAndDelete(req.params.id)
        return res.status(206).json({success:true, msg:"delete successfully", data:alldata})

    }
    catch(ex){
        res.status(500).json({success:false, msg:"data not delete"})
    }
}



module.exports = {
    addemp,
    logemp,
    getemp,
    edit,
    updateemp,
    deleteemp
}