import mongoose from 'mongoose';
const {Schema} = mongoose;

const writerSchema = new Schema(
    {
        username: {    
            type: String,
            required: true,
            unique: true,
        },
        email : {
            type: String,
            required: true,
            unique: true,
        },
        password : {
            type: String,
            required : true,
        },
    }
)

export const userModel = mongoose.model('WriterModel',writerSchema);