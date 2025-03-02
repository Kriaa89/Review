import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdatePost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ post, setPost ] = useState ({
        title : "",
        description : "",
        reviews : []
    });
    const [errors, setErrors] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err));
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/posts/${id}`, post)
            .then(() => navigate("/"))
            .catch(err => setErrors(err.response.data.errors));
    };

    return (
        <div className="container py-4">
            <h2 className="mb-4">Edit</h2>
            <form onSubmit={handleSubmit} className="card shadow p-4">
                <div className="mb-3">
                    <label className="form-label">Title:</label>
                    <input type="text" className="form-control" value={post.title} onChange={e => setPost({...post, title: e.target.value})}></input>
                    {errors.title && <span className="text-danger">{errors.title.message}</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <input type="text" className="form-control" value={post.description} onChange={e => setPost({...post, description: e.target.value})}></input>
                    {errors.description && <span className="text-danger">{errors.description.message}</span>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Reviews:</label>
                    
                    <input type="text" className="form-control" value={post.reviews} onChange={e => setPost({...post, reviews: e.target.value})}></input>

                    {errors.reviews && <span className="text-danger">{errors.reviews.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
}
export default UpdatePost;