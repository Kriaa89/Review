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
                    <input type="text" value={post.title} onChange={e => setPost({...post, title: e.target.value})}></input>
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <label>Post Desciption:</label>
                    <input type="text" value={post.description} onChange={e => setPost({...post, description: e.target.value})}></input>
                    {errors.description && <span>{errors.description.message}</span>}
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
export default PostForm;