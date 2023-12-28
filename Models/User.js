import { Schema, model } from "mongoose";

// Create Users Schema
const userModel = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    }
}, {
    timestamps: true
});


// Export the model
export default model('User', userModel);