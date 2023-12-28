import User from "../Models/User.js";
import { connect, disconnect } from "mongoose";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
dotenv.config();

const password = bcrypt.hashSync("admin@2030", 10);

//connect mongoose
connect(process.env.MONGO_URL)
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    })
    .then(() => {
        console.log("connected to db in development environment");
    });

const user = new User({
    email: "admin@gmail.com",
    password: password,
});;
user.save()
    .then(() => {
        console.log("User created");
        disconnect();
    })
    .catch(err => {
        console.log(err.stack);
        disconnect();
    });
