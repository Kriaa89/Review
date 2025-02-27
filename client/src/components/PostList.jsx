import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Postlist = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/posts")
            .then(res => setPosts(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <div>
                <h1>Hello to Posts Hub</h1>
            </div>
        </div>
    )
}