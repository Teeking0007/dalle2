import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
    img: {type: [], required: true}
})

const Images = mongoose.model('Images', imageSchema)

export default Images