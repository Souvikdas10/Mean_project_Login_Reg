const express = require('express');
const mongoose = require('mongoose');
const app = express();
const body_parser = require('body-parser');
const path=require('path')
const multer =require('multer')
const port = 7852;

const cors=require('cors')
app.use(cors());

app.use(express.urlencoded({extended:true}))
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())
app.use('/upload',express.static(path.join(__dirname,'upload')))
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
//stape4 file type
const fileFilter = (req, file, cb) => {
    if (file.mimetype.includes("png") ||
        file.mimetype.includes("jpg") ||
        file.mimetype.includes("jpeg")) {
        cb(null, true)
    }
    else {
        cb(null, false)
    }
}
//stape5 file upload
app.use(multer({ storage: fileStorage, fileFilter: fileFilter, limits: { fieldSize: 1024 * 1024 * 5 } }).single('image'))

const apiroute = require('./route/Apiroute');
app.use(apiroute)

const dbCon = "mongodb+srv://souvikdb:cSgmsmo8GCvTW05X@cluster0.bsndvpo.mongodb.net/testApi";
mongoose.connect(dbCon, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(port, () => {
            console.log(`server running http://localhost:${port}`);
            console.log('Database connected');
        })

    }).catch(err => {
        console.log(err);
    })