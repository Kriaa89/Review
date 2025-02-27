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

// update a psot by id 
async function UpdateBook(req, res) {
    try {
        const UpdateBook = await Post.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        });
        res.json(UpdateBook);
    } catch (error) {
        res.status(400).json(error);
    }
}

// delete a post by id
async function DeleteBook(req, res) {
    try {
        const DeleteBook = await Post.findByIdAndDelete(req.params.id);
        res.json(DeleteBook);
    } catch (error) {
        res.status(400).json(error);
    }
}

// export the functions 

export { CreatePost, GetAllBooks, GetOneBooks, UpdateBook, DeleteBook };