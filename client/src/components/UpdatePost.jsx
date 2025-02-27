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
    }
}