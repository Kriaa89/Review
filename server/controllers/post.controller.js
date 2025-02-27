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


// get all post from the database
async function GetAllBooks(req, res) {
    try {
        const AllBooks = await Post.find();
        res.json(AllBooks);
    } catch (error) {
        res.status(400).json(error);
    }
}

// get one post from the database
async function GetOneBooks(req, res) {
    try {
        const OneBooks = await Post.findById(req.params.id);
        res.json(OneBooks);
    } catch (error) {
        res.status(400).json(error);
    }
}