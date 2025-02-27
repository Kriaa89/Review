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
    const handleDlete = (id) => {
        axios.delete("http://localhost:8000/api/posts/" + id)
            .then(() => {
                setPosts(posts.filter(post => post._id !== id))
            })
            .catch(err => {console.log(err)});
    }

    return (
        <div>
            <div>
                <h1>Hello to Posts Hub</h1>
                <h3>List of All Posts</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Reviews</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post._id}>
                                <td>
                                    <Link to={`/posts/${post._id}`}>
                                        Post {post.index}
                                    </Link>
                                </td>
                                <td>{post.reviews.length}</td>
                                <td>{post.createdAt}</td>
                                <td>
                                    <button onClick={() => handleDlete(post._id)}>Delete</button>
                                    <Link to={`/posts/${post._id}/edit`}>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Postlist;