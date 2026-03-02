import mongoose from "mongoose";
//1-create a schema
//2-model based on schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
},
    { timestamps: true }//createdAt and updatedAt fields will be automatically added
);

const Note = mongoose.model("Note", noteSchema);

export default Note;