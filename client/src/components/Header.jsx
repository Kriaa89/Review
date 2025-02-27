import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <div className='Header'>
            <h1>Home</h1>
            <Link to='/posts/new'>
                <h2>Create Posts</h2>
            </Link>
        </div>
    </header>
    );
}
export default Header;