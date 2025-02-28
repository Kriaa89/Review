import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-dark text-white py-3 mb-4">
            <div className='Header container d-flex justify-content-between align-items-center'>
                <h1 className="m-0">Home</h1>
                <Link to='/posts/new' className="btn btn-primary">
                    <h2 className="h5 m-0">Create Posts</h2>
                </Link>
            </div>
        </header>
    );
}
export default Header;