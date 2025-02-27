import axios from "axios";
import { useEffect, useState } from "react"; // import UseState and UseEffect to use hooks in the function
import { useParams, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const [ post, setPost ] = useState({});
    const { id } = useParams();


    useEffect(() => {
        axios.get("http://localhost:8000/api/posts/" + id)
            .then(res => setPost(res.data))
            .catch(err => console.log(err));
    }, [id]);
    


    return (
        <div>
            <h3>Reviews {post.reviews.index}</h3>
            <div>
                <p><strong>Title:</strong></p>
                <p><strong>Post Description:</strong></p>
                <p><strong>Title</strong></p>
            </div>
        </div>
    )

}