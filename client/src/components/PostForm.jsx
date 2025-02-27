import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostForm = () => {
    const [post, setPost] = useState({
        title : "",
        description : "",
        reviews : []
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/posts", post)
            .then(() => navigate("/"))
            .catch(err => setErrors(err.response.data.errors));
    };
    return (
        <div>
            <h2>Add a Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Post Title:</label>
                    <input type="text" value={post.title}></input>
                </div>
            </form>
        </div>
    )
}