import Jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


// Models File
import User from '../Models/User.js';


// Login User
export function login(req) {
    return new Promise((resolve, reject) => {
        User.findOne({
            email: req.body.email
        }).then((data) => {
            if (data) {
                if (bcrypt.compareSync(req.body.password, data.password)) {
                    const jwtBody = {
                        _id: data._id,
                        email: data.email,
                    }
                    let token = Jwt.sign(jwtBody, `${process.env.JWT_SECRET}`);
                    data.token = token;
                    data.updatedAt = Date.now();

                    data.save().then((data) => {
                        resolve(data)
                    })
                } else {
                    reject({
                        message: 'Please Enter a Valid Password'
                    });
                }
            } else {
                reject({
                    message: 'User Not Found'
                });
            }
        }).catch(err => {
            reject(err);
        })
    });
}

