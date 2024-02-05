import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    logoUrl: {
        type: String,
    },
    patternUrl: {
        type: String,
    },
    thumbnailUrl: {
        type: String,
    },

}, { timestamps: true })

export default mongoose.model('Gallery', GallerySchema)