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
        <div className="container py-4">
            <h2 className="mb-4">Add a Post</h2>
            <form onSubmit={handleSubmit} className="card shadow p-4">
                <div className="mb-3">
                    <label className="form-label">Post Title:</label>
                    <input type="text" className="form-control" value={post.title} onChange={e => setPost({...post, title: e.target.value})}></input>
                    {errors.title && <span className="text-danger">{errors.title.message}</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Post Desciption:</label>
                    <input type="text" className="form-control" value={post.description} onChange={e => setPost({...post, description: e.target.value})}></input>
                    {errors.description && <span className="text-danger">{errors.description.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}
export default PostForm;