import express from "express";
import { createServer } from "http";
import logger from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();
const server = createServer(app);

//Require DataBase Connection
import "../api/config/database";

//Setup Http-Logger Morgan Middleware
app.use(logger('dev'));

//Handling CORS Errors
app.use(cors());

//Require Routes
import postRoute from "../api/routes/posts";

//Define the Static Folder
app.use(express.static(path.resolve(__dirname, '../public')));

//Setup Body-Parser & Cookie-Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

//Route for Post
app.use('/api', postRoute);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`server running on port ${port}..!!`));
