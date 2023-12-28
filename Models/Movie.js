import { Schema, model } from "mongoose";
import mongoose from "mongoose";

// Create Users Schema
const movieModel = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: true
    },
    publishing_year: {
        type: String,
        required: true
    },
    image_url: {
        type: String
    }
}, {
    timestamps: true
});


// Export the model
export default model('Movie', movieModel);