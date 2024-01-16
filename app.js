import express from 'express';
import bodyParser from 'body-parser';
import fileupload from 'express-fileupload';
import cors from 'cors';

const app = express();

//to link routes
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';
import DoctorRouter from './routes/doctor.router.js';

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//to extract file data from request
app.use(fileupload());

//to resolve cross origin problem
app.use(cors());

//route level middleware
app.use("/user",UserRouter);
app.use("/category",CategoryRouter);
app.use("/doctor",DoctorRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");