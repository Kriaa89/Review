import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
    const [ post, setPost ] = useState({
        title: "",
        description: "",
        reviews: []
    });
    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/posts/" + id)
            .then(res => setPost(res.data))
            .catch(err => console.log(err));
    }, [id]);
    
    return (
        <div className="container py-4">
            <h3 className="mb-4 text-primary">Reviews {post.reviews.index}</h3>
            <div className="card shadow mb-4 p-4">
                <p><strong>Title:</strong> {post.title}</p>
                <p><strong>Post Description:</strong> {post.description}</p>
            </div>
            <div className="card shadow p-4">
                <h4 className="mb-3">Reviews</h4>
                <ul className="list-group">
                    {post.reviews.map((review, index) => (
                        <li key={index} className="list-group-item">{review}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default PostDetails;