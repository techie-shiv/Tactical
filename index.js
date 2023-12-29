import express, { urlencoded, json } from 'express'
const app = express()
import cors from 'cors'
import route from './routes.js'
import {  connectDatabase } from './utils/commonFun.js'
import swaggerJsdoc from "swagger-jsdoc"
import { serve, setup } from 'swagger-ui-express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Tectical APIs',
            version: '1.0.0',
            description: "Tectical APIs for web or mobile app",
            contact: {
                name: 'Zibtek'
            },
            servers: [],
        },
    },
    apis: ['./swagger/*.js']
};

const swaggerDoc = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', serve, setup(swaggerDoc))

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

const corsOptions = {
    origin: '*',
    Credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(urlencoded({
    extended: false
}))

connectDatabase()

app.get("/common", (req, res) => {
    res.status(200).send("common ready to start");
});
app.use('/api', route)

app.listen(process.env.PORT, (err) => {
    if (err) console.log(`Server connection issue: ${err}`)
    else console.log('Server connected on port', process.env.PORT)
})

export default app