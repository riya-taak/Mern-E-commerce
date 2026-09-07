import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

userSchema.methods.matchPassword = async function (enterPassword) {
    return bcrypt.compare(enterPassword , this.password)
}

export default mongoose.model('User', userSchema);