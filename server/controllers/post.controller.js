import Post from "../model/post.model";

// create a new post and save it to the database
async function CreatePost(req, res) {
    try {
        const NewPost = await Post.create(req.body)
        res.json(NewPost);
    } catch (error) {
        res.status(400).json(error);
    }
}