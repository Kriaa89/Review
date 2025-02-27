import {model, Schema} from 'mongoose';
const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Titleis required!"],
            minlength: [2, "First name must be at least 2 characters long!"],
            maxlength: [255, "First name must be less than 255 characters long"]
        },
        description: {
            type: String,
            required: [true, "Last name is required!"],
            minlength: [2, "Last name must be at least 2 characters long!"],
            maxlength: [255, "Last name must be less than 255 characters long"]
        },
        reviews: {
            type: String,
            default: false
        }
    },
    { timestamps: true }
);
const Post = model("Post", PostSchema);
export default Post;