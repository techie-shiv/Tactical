import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import multer from 'multer'
dotenv.config();

export const JwtVerification = (req, res, next) => {
    req.headers.authorization = req.headers.authorization || req.headers.Authorization
    if (req.path == '/login') {
        next()
    } else {
        jwt.verify(req.headers.authorization, process.env.JWT_SECRET, (err, result) => {
            if (err) {
                return res.status(401).send({
                    message: 'Provide authorization details'
                })
            } else {
                req.authBody = result
                next()
            }
        })
    }
}

export const connectDatabase = () => {
    const options = {
        serverSelectionTimeoutMS: 5000,
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6
    }
    mongoose.connect(process.env.MONGO_URL, options).then(() => {
        console.log('Database connected')
    }).catch((err) => {
        console.log(`Database connection issue: ${err}`)
    })
}


export const upload = multer({
    // local
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {

            cb(null, file.originalname)
        }
    }),
})
