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
        axios.get("http://localhost:8000/api/posts/" + id)
            .then(res => setPost(res.data))
            .catch(err => console.log(err));
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/posts/" + id, post)
            .then(() => navigate("/"))
            .catch(err => setErrors(err.response.data.errors));
    };

    return (
        <div>
            <h2>Edit</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Post Title:</label>
                    <input type="text" value={post.title} onChange={e => setPost({...post, title: e.target.value})}> </input>
                    {errors.title && <span>{errors.title.message}</span>}
                </div>
                <div>
                    <label>Post Description:</label>
                    <input type="text" value={post.description} onChange={e => setPost({...post, description: e.target.value})}></input>
                    {errors.description && <span>{errors.description.message}</span>}
                </div>
                <div>
                    <label>Add a review:</label>
                    <input type="text" value={post.reviews} onChange={e => setPost({...post, reviews: e.target.value})}></input>
                </div>
            </form>
        </div>
    );
}
export default UpdatePost;